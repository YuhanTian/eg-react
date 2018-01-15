import React from 'react';
import PropTypes from 'prop-types';

import Chromosomes from './Chromosomes';
import Ruler from './Ruler';
import SelectedRegionBox from './SelectedRegionBox';

import SelectableArea from '../SelectableArea';
import SvgContainer from '../SvgContainer';
import { RIGHT_MOUSE } from '../DragAcrossDiv';
import DragAcrossView from '../DragAcrossView';

import DisplayedRegionModel from '../../model/DisplayedRegionModel';
import LinearDrawingModel from '../../model/LinearDrawingModel';

const WHEEL_ZOOM_SPEED = 0.2;

const CHROMOSOME_Y = 30;
const SELECTED_BOX_Y = 30;
const RULER_Y = CHROMOSOME_Y + 40;

const SELECT_BOX_Y = "25px";
const SELECT_BOX_HEIGHT = "60px";

/**
 * The main pane of the genome navigator.  Manages child components and listens for events that modify the view region.
 * 
 * @author Silas Hsu
 */
class MainPane extends React.Component {
    static propTypes = {
        model: PropTypes.instanceOf(DisplayedRegionModel).isRequired, // The current view

        /**
         * The region that the tracks are displaying
         */
        selectedRegionModel: PropTypes.instanceOf(DisplayedRegionModel).isRequired,

        /**
         * Called when the user selects a new region to display.  Has the signature
         *     (newStart: number, newEnd: number): void
         *         `newStart`: the absolute base number of the start of the selected interval
         *         `newEnd`: the absolute base number of the end of the selected interval
         */
        regionSelectedCallback: PropTypes.func.isRequired,

        /**
         * Called during dragging.  Has the signature
         *     (newStart: number,
         *      newEnd: number,
         *      event: React.SyntheticEvent,
         *      coordinateDiff: {dx: number, dy: number}
         *     ): void
         *         `newStart`: the absolute base number of the start of the view region if it were centered on the mouse
         *         `newEnd`: the absolute base number of the end of the view region if it were centered on the mouse
         *         `event`: the mouse event that triggered this event
         *         `coordinateDiff`: the location of the mouse relative to where the drag started
         */
        dragCallback: PropTypes.func.isRequired,
        
        /**
         * Called when the user presses the "GOTO" button to quicky scroll the view to the selected track region.
         *     (newStart: number, newEnd: number): void
         *         `newStart`: the absolute base number of the start of the interval to scroll to
         *         `newEnd`: the absolute base number of the end of the interval to scroll to
         */
        gotoButtonCallback: PropTypes.func.isRequired,

        /**
         * Called when the view should be zoomed.  Has the signature
         *     (amount: number, focusPoint: number)
         *         `amount`: amount to zoom
        *          `focusPoint`: focal point of the zoom, which is where the mouse was as % of the width of the SVG.
         */
        zoomCallback: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props);
        this.mousewheel = this.mousewheel.bind(this);
        this.areaSelected = this.areaSelected.bind(this);
    }

    /**
     * Zooms the view depending on the user's mousewheel action
     * 
     * @param {React.SyntheticEvent} event - a wheel event fired from within this pane
     */
    mousewheel(event) {
        event.preventDefault();
        let paneWidth = event.currentTarget.clientWidth;
        let focusPoint = event.clientX / paneWidth; // Proportion-based, not base-based.
        if (event.deltaY > 0) { // Mouse wheel turned towards user, or spun downwards -- zoom out
            this.props.zoomCallback(1 + WHEEL_ZOOM_SPEED, focusPoint);
        } else if (event.deltaY < 0) { // Zoom in
            this.props.zoomCallback(1 - WHEEL_ZOOM_SPEED, focusPoint);
        }
    }

    /**
     * Fires the callback signaling a new region has been selected.
     * 
     * @param {number} startX - the left X coordinate of the selected area
     * @param {number} endX - the right X coordinate of the selected area
     * @param {React.SyntheticEvent} event - the final mouse event that triggered the selection
     */
    areaSelected(startX, endX, event) {
        const paneWidth = event.currentTarget.clientWidth;
        const drawModel = new LinearDrawingModel(this.props.model, paneWidth);
        this.props.regionSelectedCallback(drawModel.xToBase(startX), drawModel.xToBase(endX));
    }

    /**
     * Places a <svg> and children that draw things.
     * 
     * @override
     */
    render() {
        // Order of components matters; components listed later will be drawn IN FRONT of ones listed before
        return (
        <DragAcrossView button={RIGHT_MOUSE} onViewDrag={this.props.dragCallback} displayedRegion={this.props.model} >
            <SelectableArea
                viewRegion={this.props.model}
                y={SELECT_BOX_Y}
                height={SELECT_BOX_HEIGHT}
                onAreaSelected={this.areaSelected}
            >
                <SvgContainer
                    displayedRegion={this.props.model}
                    onContextMenu={event => event.preventDefault()}
                    onWheel={this.mousewheel}
                    style={{border: "2px solid black"}}
                >
                    <Chromosomes y={CHROMOSOME_Y} displayedRegion={this.props.model} />
                    <Ruler y={RULER_Y} displayedRegion={this.props.model} />
                    <SelectedRegionBox
                        displayedRegion={this.props.model}
                        selectedRegion={this.props.selectedRegionModel}
                        gotoButtonCallback={this.props.gotoButtonCallback}
                        y={SELECTED_BOX_Y}
                    />
                </SvgContainer>
            </SelectableArea>
        </DragAcrossView>
        );
    }
}

export default MainPane;
