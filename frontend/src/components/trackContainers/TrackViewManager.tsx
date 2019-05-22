import React from 'react';
import memoizeOne from 'memoize-one';

import { withTrackLegendWidth } from '../withTrackLegendWidth';

import { TrackModel } from '../../model/TrackModel';
import DisplayedRegionModel from '../../model/DisplayedRegionModel';
import { ViewExpansion } from '../../model/RegionExpander';
import { MultiAlignmentViewCalculator, MultiAlignment } from '../../model/alignment/MultiAlignmentViewCalculator';

interface DataManagerProps {
    genome: string; // The primary genome
    tracks: TrackModel[]; // Tracks
    viewRegion: DisplayedRegionModel; // Region that the user requests to view
    legendWidth: number;
    containerWidth: number;
    expansionAmount: any;
}

interface DataManagerState {
    primaryView: ViewExpansion;
}

interface WrappedComponentProps {
    alignments: Promise<MultiAlignment>
    // alignments: AlignmentPromises;
    basesPerPixel: number;
    primaryViewPromise: Promise<ViewExpansion>;
    primaryView: ViewExpansion;
}

export function withTrackView(WrappedComponent: React.ComponentType<WrappedComponentProps>) {
    class TrackViewManager extends React.Component<DataManagerProps, DataManagerState> {
        private _primaryGenome: string;
        private _multialignmentCalculator: MultiAlignmentViewCalculator

        constructor(props: DataManagerProps) {
            super(props);
            this._primaryGenome = props.genome;
            const queryGenomes = this.getSecondaryGenomes(props.tracks);
            this._multialignmentCalculator = new MultiAlignmentViewCalculator(this._primaryGenome, queryGenomes);

            this.state = {
                primaryView: 
                    this.props.expansionAmount.calculateExpansion(props.viewRegion, this.getVisualizationWidth())
            };
            this.fetchPrimaryView = memoizeOne(this.fetchPrimaryView);
        }

        getVisualizationWidth() {
            return Math.max(1, this.props.containerWidth - this.props.legendWidth);
        }

        getSecondaryGenomes(tracks: TrackModel[]) {
            const genomeSet = new Set(tracks.map(track => track.querygenome || track.getMetadata('genome')));
            genomeSet.delete(this._primaryGenome);
            genomeSet.delete(undefined);
            return Array.from(genomeSet);
        }

        async fetchPrimaryView(viewRegion: DisplayedRegionModel, tracks: TrackModel[]): Promise<ViewExpansion> {
            const visData = this.props.expansionAmount.calculateExpansion(viewRegion, this.getVisualizationWidth());
            const secondaryGenomes = this.getSecondaryGenomes(tracks);
            if (!secondaryGenomes) {
                return visData;
            }

            try {
                const alignment = await this._multialignmentCalculator.multiAlign(visData);
                // All the primaryVisData in alignment should be the same:
                const primaryVisData = await Object.values(alignment)[0].primaryVisData;
                this.setState({ primaryView: primaryVisData });
                return primaryVisData;
            } catch (error) {
                console.error(error);
                console.error("Falling back to nonaligned primary view");
                this.setState({ primaryView: visData });
                return visData;
            }
        }

        fetchAlignments(viewRegion: DisplayedRegionModel, tracks: TrackModel[]): Promise<MultiAlignment> {
            const visData = this.props.expansionAmount.calculateExpansion(viewRegion, this.getVisualizationWidth());
            const alignmentCalculator = this._multialignmentCalculator;
            return alignmentCalculator.multiAlign(visData);
        }

        async componentDidUpdate(prevProps: DataManagerProps) {
            if (this.props.viewRegion !== prevProps.viewRegion || this.props.tracks !== prevProps.tracks) {
                const primaryView = await this.fetchPrimaryView(this.props.viewRegion, this.props.tracks);
                this.setState({primaryView});
            }
        }

        render() {
            /*
            We can get away with calling these functions every render because of clever use of memoizeOne.
            In fact, since this.getPrimaryViewPromise() asynchronously sets state, we MUST use memoizeOne to prevent
            infinite loops!
            */
            return <WrappedComponent
                alignments={this.fetchAlignments(this.props.viewRegion, this.props.tracks)}
                basesPerPixel={this.props.viewRegion.getWidth() / this.getVisualizationWidth()}
                primaryViewPromise={this.fetchPrimaryView(this.props.viewRegion, this.props.tracks)}
                primaryView={this.state.primaryView}
                {...this.props}
            />;
        }
    }

    return withTrackLegendWidth(TrackViewManager);
}
