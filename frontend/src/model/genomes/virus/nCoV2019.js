import React from "react";
import Chromosome from "../Chromosome";
import Genome from "../Genome";
import TrackModel from "../../TrackModel";

const genome = new Genome("nCoV2019", [new Chromosome("NC_045512.2", 29903)]);

const navContext = genome.makeNavContext();
const defaultRegion = navContext.parse("NC_045512.2:0-29903");
const defaultTracks = [
    new TrackModel({
        type: "geneAnnotation",
        name: "ncbiGene",
        label: "NCBI genes",
        genome: "nCoV2019",
    }),
    new TrackModel({
        type: "ruler",
        name: "Ruler",
    }),
    new TrackModel({
        type: "bedgraph",
        name: "GC Percentage",
        url: "https://vizhub.wustl.edu/public/virus/ncov_CGpct.bedgraph.sort.gz",
    }),
];

const annotationTracks = {
    Ruler: [
        {
            type: "ruler",
            label: "Ruler",
            name: "Ruler",
        },
    ],
    Genes: [
        {
            name: "ncbiGene",
            label: "NCBI genes",
            filetype: "geneAnnotation",
        },
    ],
    Assembly: [
        {
            type: "bedgraph",
            name: "GC Percentage",
            url: "https://vizhub.wustl.edu/public/virus/ncov_CGpct.bedgraph.sort.gz",
        },
    ],
    "Genome Comparison": [
        {
            name: "merstonCoV2019",
            label: "MERS to nCoV2019 alignment",
            querygenome: "MERS",
            filetype: "genomealign",
            url: "https://vizhub.wustl.edu/public/virus/ncov_mers.genomealign.gz",
        },
        {
            name: "sarstonCoV2019",
            label: "SARS to nCoV2019 alignment",
            querygenome: "SARS",
            filetype: "genomealign",
            url: "https://vizhub.wustl.edu/public/virus/ncov_sars.genomealign.gz",
        },
        // {
        //     name: "pangolinCoVtonCoV2019",
        //     label: "pangolin CoV to nCoV2019 alignment",
        //     querygenome: "pangolin",
        //     filetype: "genomealign",
        //     url: "https://wangftp.wustl.edu/~dli/virusGateway/nCoV-pangolin.fa.genomealign1.gz"
        // },
        // {
        //     name: "batCoVtonCoV2019",
        //     label: "bat CoV to nCoV2019 alignment",
        //     querygenome: "bat",
        //     filetype: "genomealign",
        //     url: "https://wangftp.wustl.edu/~dli/virusGateway/nCoV-RaTG13.fa.genomealign1.gz"
        // }
    ],
};

const publicHubData = {
    "NCBI database":
        "SNV tracks of all SARS-CoV-2 strains on NCBI Genbank displaying their sequence variation from reference",
    "Nextstrain database":
        "SNV tracks of all SARS-CoV-2 strains from Nextstrain, displaying their sequence variation from the reference",
    "GISAID database":
        "SNV tracks of SARS-CoV-2 strains from GISAID, displaying their sequence variation from the reference",
    Primers: "CDC/non-CDC primers for detecting SARS-CoV-2",
    "Epitope predictions": "SARS-CoV-2 Epitope Predictions Across HLA-1 Alleles",
    "Recombination events": "Recombination events detected by junction-spanning RNA-seq",
    "Viral RNA modifications": "RNA modifications detected using Nanopore direct RNA sequencing",
    "Viral RNA expression": "Viral RNA expression measured by Nanopore",
};

const publicHubList = [
    {
        collection: "NCBI database",
        name: "All NCBI SARS-CoV-2 isolates",
        numTracks: "Updating",
        oldHubFormat: false,
        url: "https://wangftp.wustl.edu/~cfan/updates/latest/browser_strains.json",
        description: {
            "hub built by": "Changxu Fan (fanc@wustl.edu)",
            "hub info":
                "All SARS-CoV-2 strains available on NCBI. Aligned to reference genome (NC_045512.2) using EMBL 'stretcher'. Updated daily",
            "data source": "https://www.ncbi.nlm.nih.gov/nuccore",
            "white space": "Matching the reference",
            "colored bars":
                "Variation from the reference. Details are color coded. Zoom in to click on the bar to see detail",
            "long stretches of rosy brown": "Unsequenced regions",
        },
    },
    {
        collection: "Nextstrain database",
        name: "All Nextstrain SARS-CoV-2 isolates",
        numTracks: "Updating",
        oldHubFormat: false,
        url: "https://wangftp.wustl.edu/~cfan/Nextstrain/latest/browser_strains.json",
        description: {
            "hub built by": "Changxu Fan (fanc@wustl.edu)",
            "track type":
                "SNV tracks of all SARS-CoV-2 strains from Nextstrain, displaying their sequence variation from the reference",
            "data source": "http://data.Nextstrain.org/ncov.json",
        },
    },
    {
        collection: "GISAID database",
        name: "All GISAID SARS-CoV-2 isolates",
        numTracks: "Updating",
        oldHubFormat: false,
        url: "https://wangftp.wustl.edu/~cfan/gisaid/latest/browser_strains.json",
        description: {
            "track type":
                "SNV tracks of all SARS-CoV-2 strains from GISAID, displaying their sequence variation from the reference",
            "data source": (
                <a href="https://www.gisaid.org/" target="_blank" rel="noopener noreferrer">
                    <img src="https://www.gisaid.org/fileadmin/gisaid/img/schild.png" alt="GISAID logo" />
                </a>
            ),
        },
    },
    {
        collection: "Primers",
        name: "Primers",
        numTracks: "Updating",
        oldHubFormat: false,
        url: "https://wangftp.wustl.edu/~cfan/viralBrowser/primers/primers.json",
        description: {
            "hub built by": "Changxu Fan (fanc@wustl.edu)",
            "hub info": "CDC primers and WHO non-CDC primers",
            "data source:":
                "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/technical-guidance/laboratory-guidance",
        },
    },
    {
        collection: "Epitope Predictions",
        name: "Epitope Predictions (Campbell, et al. 2020)",
        numTracks: 1,
        oldHubFormat: false,
        url: "https://wangftp.wustl.edu/~jflynn/virus_genome_browser/Campbell_et_al/campbell_et_al.json",
        description: {
            "hub built by": "Jennifer Flynn (jaflynn@wustl.edu)",
            "hub info": "Predicted SARS-CoV-2 epitopes that bind to class 1 HLA proteins.",
            values:
                "Values represent number of strains with the predicted epitope. Only epitope predictions with 100% sequence identity in SARS-CoV-2 are displayed.",
        },
    },
    {
        collection: "Recombination events",
        name: "Recombination events (Kim et al., 2020)",
        numTracks: 2,
        oldHubFormat: false,
        url: "https://wangftp.wustl.edu/~gmatt/viralBrowser/recombinationEvents.json",
        description: {
            "hub built by": "Gavriel Matt (gavrielmatt@wustl.edu)",
            "hub info":
                "Recombination events detected by junction-spanning RNA-seq reads generated by (Kim et al., 2020; DOI: 10.1016/j.cell.2020.04.011). The color intensity of the arc corresponds to the number of reads supporting the recombination event.",
            "TRS-L-dependent recombination track": "Recombination events mediated by TRS-L. Scale 0-7000000 reads.",
            "TRS-L-independent recombination track": "Recombination events not mediated by TRS-L. Scale 0-1000 reads.",
        },
    },
    {
        collection: "Viral RNA modifications",
        name: "Viral RNA modifications (Kim et al., 2020)",
        numTracks: 10,
        oldHubFormat: false,
        url: "https://wangftp.wustl.edu/~mchoudhary/viralBrowser/studies/kim-2020/rnamodifications.json",
        description: {
            "hub built by": "Mayank Choudhary (mayank-choudhary@wustl.edu)",
            "hub info":
                "RNA modifications detected using Nanopore direct RNA sequencing (Kim et al., 2020; DOI: 10.1016/j.cell.2020.04.011). Values are displayed as fractions",
            "data source": "Supplementary Table 5, Kim et al 2020",
        },
    },
    {
        collection: "Viral RNA expression",
        name: "Viral RNA expression (Kim et al., 2020)",
        numTracks: 1,
        oldHubFormat: false,
        url: "https://wangftp.wustl.edu/~xzhuo/viralBrowser/nanoporeBW.json",
        description: {
            "hub built by": "Xiaoyu Zhuo (xzhuo@wustl.edu)",
            "hub info":
                "a bigwig track displaying nanopore expression from SARS-CoV-2 infected Vero cells (Kim et al., 2020; DOI: 10.1016/j.cell.2020.04.011).",
        },
    },
];

const nCoV2019 = {
    genome: genome,
    navContext: navContext,
    cytobands: {},
    defaultRegion: defaultRegion,
    defaultTracks: defaultTracks,
    twoBitURL: "https://vizhub.wustl.edu/public/virus/nCoV2019.2bit",
    annotationTracks,
    publicHubData,
    publicHubList,
};

export default nCoV2019;
