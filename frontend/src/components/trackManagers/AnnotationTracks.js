//hg19 annotation tracks

const annotationTracks = {
    Genes: [
        {
            name: 'refGene', label: 'RefSeq genes',
            filetype: 'hammock',
            url: 'http://egg.wustl.edu/d/hg19/refGene.gz',
            queryUrl: 'http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Search&db=Nucleotide&doptcmdl=GenBank&term=',
            boxcolor: '#002EB8',
            details: {
                source: 'UCSC Genome Browser',
                'download date': 'Jan 1, 2012',
            },
            isgene: true, dbsearch: true
        },
        {
            name: 'xenoRefGene', label: 'non-human RefSeq genes',
            filetype: 'hammock',
            url: 'http://egg.wustl.edu/d/hg19/xenoRefGene.gz',
            queryUrl: 'http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Search&db=Nucleotide&doptcmdl=GenBank&term=',
            isgene: true, dbsearch: true
        },
        {
            name: 'gencodeV19', label: 'GENCODE V19 genes',
            filetype: 'hammock',
            categories: { 1: ['coding', 'rgb(0,60,179)'], 2: ['non-coding', 'rgb(0,128,0)'], 3: ['pseudogene', 'rgb(230,0,172)'], 4: ['problem', 'rgb(255,0,0)'], 5: ['polyA', 'rgb(0,0,51)'] },
            url: 'http://egg.wustl.edu/d/hg19/gencodeV19.gz',
            isgene: true, dbsearch: true
        },
        {
            name: 'gencodeV17', label: 'GENCODE V17 genes',
            filetype: 'hammock',
            categories: { 1: ['coding', 'rgb(0,60,179)'], 2: ['non-coding', 'rgb(0,128,0)'], 3: ['pseudogene', 'rgb(230,0,172)'], 4: ['problem', 'rgb(255,0,0)'], 5: ['polyA', 'rgb(0,0,51)'] },
            url: 'http://egg.wustl.edu/d/hg19/gencodeV17.gz',
            isgene: true, dbsearch: false
        },
    ],

    RepeatMasker: {
        'All Repeats': [
            {
                name: 'rmsk_all', label: 'RepeatMasker',
                filetype: 'hammock',
                categories: {
                    1: ['SINE - short interspersed nuclear elements', '#cc0000'],
                    2: ['LINE - long interspersed nuclear element', '#FF6600'],
                    3: ['LTR - long terminal repeat element', '#006600'],
                    4: ['DNA transposon', '#4A72E8'],
                    5: ['Simple repeat, micro-satellite', '#AB833B'],
                    7: ['Low complexity repeat', '#663333'],
                    6: ['Satellite repeat', '#660000'],
                    9: ['Other repeats', '#488E8E'],
                    8: ['RNA repeat', '#cc33ff'],
                    10: ['Unknown', '#5C5C5C']
                },
                scorenamelst: ["Smith-Waterman score", "SW score normalized by length", "1-divergence%"],
                showscoreidx: 2,
                url: 'http://egg.wustl.edu/d/hg19/rmsk_all.gz',
                defaultmode: 'barplot',
                height: 35,
            },
            {
                name: 'rmsk_ensemble', label: 'RepeatMasker slim',
                filetype: 'categorical',
                categories: {
                    1: ['SINE - short interspersed nuclear elements', '#cc0000'],
                    2: ['LINE - long interspersed nuclear element', '#FF6600'],
                    3: ['LTR - long terminal repeat element', '#006600'],
                    4: ['DNA transposon', '#4A72E8'],
                    5: ['Simple repeat, micro-satellite', '#AB833B'],
                    7: ['Low complexity repeat', '#663333'],
                    6: ['Satellite repeat', '#660000'],
                    9: ['Other repeats', '#488E8E'],
                    8: ['RNA repeat', '#cc33ff'],
                    10: ['Unknown', '#5C5C5C']
                },
                url: 'http://egg.wustl.edu/d/hg19/rmsk_ensemble.gz',
            },
        ],
        'Transposable Elements': [
            {
                name: 'DNAall', label: 'DNA', filetype: 'hammock', boxcolor: '#4A72E8',
                url: 'http://egg.wustl.edu/d/hg19/DNA.gz'
            },
            {
                name: 'DNA?all', label: 'DNA?', filetype: 'hammock', boxcolor: '#4A72E8',
                url: 'http://egg.wustl.edu/d/hg19/DNAq.gz'
            },
            {
                name: 'LTRall', label: 'LTR', filetype: 'hammock', boxcolor: '#006600',
                url: 'http://egg.wustl.edu/d/hg19/LTR.gz'
            },
            {
                name: 'LTR?all', label: 'LTR?', filetype: 'hammock', boxcolor: '#006600',
                url: 'http://egg.wustl.edu/d/hg19/LTRq.gz'
            },
            {
                name: 'LINEall', label: 'LINE', filetype: 'hammock', boxcolor: '#FF6600',
                url: 'http://egg.wustl.edu/d/hg19/LINE.gz'
            },
            {
                name: 'LINE?all', label: 'LINE?', filetype: 'hammock', boxcolor: '#FF6600',
                url: 'http://egg.wustl.edu/d/hg19/LINEq.gz'
            },
            {
                name: 'SINEall', label: 'SINE', filetype: 'hammock', boxcolor: '#cc0000',
                url: 'http://egg.wustl.edu/d/hg19/SINE.gz'
            },
            {
                name: 'SINE?all', label: 'SINE?', filetype: 'hammock', boxcolor: '#cc0000',
                url: 'http://egg.wustl.edu/d/hg19/SINEq.gz'
            },
        ],
        'DNA class': [
            {
                name: 'DNA', label: 'DNA', filetype: 'hammock', boxcolor: '#4A72E8',
                url: 'http://egg.wustl.edu/d/hg19/DNADNA.gz'
            },
            {
                name: 'DNA?', label: 'DNA?', filetype: 'hammock', boxcolor: '#4A72E8',
                url: 'http://egg.wustl.edu/d/hg19/DNAqDNAq.gz'
            },
            {
                name: 'hAT', label: 'hAT', filetype: 'hammock', boxcolor: '#4A72E8',
                url: 'http://egg.wustl.edu/d/hg19/DNAhAT.gz'
            },
            {
                name: 'hAT?', label: 'hAT?', filetype: 'hammock', boxcolor: '#4A72E8',
                url: 'http://egg.wustl.edu/d/hg19/DNAhATq.gz'
            },
            {
                name: 'hAT-Blackjack', label: 'hAT-Blackjack', filetype: 'hammock', boxcolor: '#4A72E8',
                url: 'http://egg.wustl.edu/d/hg19/DNAhAT-Blackjack.gz'
            },
            {
                name: 'hAT-Charlie', label: 'hAT-Charlie', filetype: 'hammock', boxcolor: '#4A72E8',
                url: 'http://egg.wustl.edu/d/hg19/DNAhAT-Charlie.gz'
            },
            {
                name: 'hAT-Tip100', label: 'hAT-Tip100', filetype: 'hammock', boxcolor: '#4A72E8',
                url: 'http://egg.wustl.edu/d/hg19/DNAhAT-Tip100.gz'
            },
            {
                name: 'Merlin', label: 'Merlin', filetype: 'hammock', boxcolor: '#4A72E8',
                url: 'http://egg.wustl.edu/d/hg19/DNAMerlin.gz'
            },
            {
                name: 'MuDR', label: 'MuDR', filetype: 'hammock', boxcolor: '#4A72E8',
                url: 'http://egg.wustl.edu/d/hg19/DNAMuDR.gz'
            },
            {
                name: 'PiggyBac?', label: 'PiggyBac?', filetype: 'hammock', boxcolor: '#4A72E8',
                url: 'http://egg.wustl.edu/d/hg19/DNAPiggyBacq.gz'
            },
            {
                name: 'PiggyBac', label: 'PiggyBac', filetype: 'hammock', boxcolor: '#4A72E8',
                url: 'http://egg.wustl.edu/d/hg19/DNAPiggyBac.gz'
            },
            {
                name: 'TcMar?', label: 'TcMar?', filetype: 'hammock', boxcolor: '#4A72E8',
                url: 'http://egg.wustl.edu/d/hg19/DNATcMarq.gz'
            },
            {
                name: 'TcMar', label: 'TcMar', filetype: 'hammock', boxcolor: '#4A72E8',
                url: 'http://egg.wustl.edu/d/hg19/DNATcMar.gz'
            },
            {
                name: 'TcMar-Mariner', label: 'TcMar-Mariner', filetype: 'hammock', boxcolor: '#4A72E8',
                url: 'http://egg.wustl.edu/d/hg19/DNATcMar-Mariner.gz'
            },
            {
                name: 'TcMar-Tc2', label: 'TcMar-Tc2', filetype: 'hammock', boxcolor: '#4A72E8',
                url: 'http://egg.wustl.edu/d/hg19/DNATcMar-Tc2.gz'
            },
            {
                name: 'TcMar-Tigger', label: 'TcMar-Tigger', filetype: 'hammock', boxcolor: '#4A72E8',
                url: 'http://egg.wustl.edu/d/hg19/DNATcMar-Tigger.gz'
            },
        ],
        'LTR class': [
            {
                name: 'ERV', label: 'ERV', filetype: 'hammock', boxcolor: '#006600',
                url: 'http://egg.wustl.edu/d/hg19/LTRERV.gz'
            },
            {
                name: 'ERV1', label: 'ERV1', filetype: 'hammock', boxcolor: '#006600',
                url: 'http://egg.wustl.edu/d/hg19/LTRERV1.gz'
            },
            {
                name: 'ERVK', label: 'ERVK', filetype: 'hammock', boxcolor: '#006600',
                url: 'http://egg.wustl.edu/d/hg19/LTRERVK.gz'
            },
            {
                name: 'ERVL', label: 'ERVL', filetype: 'hammock', boxcolor: '#006600',
                url: 'http://egg.wustl.edu/d/hg19/LTRERVL.gz'
            },
            {
                name: 'ERVL?', label: 'ERVL?', filetype: 'hammock', boxcolor: '#006600',
                url: 'http://egg.wustl.edu/d/hg19/LTRERVLq.gz'
            },
            {
                name: 'ERVL-MaLR', label: 'ERVL-MaLR', filetype: 'hammock', boxcolor: '#006600',
                url: 'http://egg.wustl.edu/d/hg19/LTRERVL-MaLR.gz'
            },
            {
                name: 'Gypsy?', label: 'Gypsy?', filetype: 'hammock', boxcolor: '#006600',
                url: 'http://egg.wustl.edu/d/hg19/LTRGypsyq.gz'
            },
            {
                name: 'Gypsy', label: 'Gypsy', filetype: 'hammock', boxcolor: '#006600',
                url: 'http://egg.wustl.edu/d/hg19/LTRGypsy.gz'
            },
            {
                name: 'LTR', label: 'LTR', filetype: 'hammock', boxcolor: '#006600',
                url: 'http://egg.wustl.edu/d/hg19/LTRLTR.gz'
            },
            {
                name: 'LTR?', label: 'LTR?', filetype: 'hammock', boxcolor: '#006600',
                url: 'http://egg.wustl.edu/d/hg19/LTRqLTRq.gz'
            },
        ],
        'LINE class': [
            {
                name: 'CR1', label: 'CR1', filetype: 'hammock', boxcolor: '#FF6600',
                url: 'http://egg.wustl.edu/d/hg19/LINECR1.gz'
            },
            {
                name: 'Dong-R4', label: 'Dong-R4', filetype: 'hammock', boxcolor: '#FF6600',
                url: 'http://egg.wustl.edu/d/hg19/LINEDong-R4.gz'
            },
            {
                name: 'L1', label: 'L1', filetype: 'hammock', boxcolor: '#FF6600',
                url: 'http://egg.wustl.edu/d/hg19/LINEL1.gz'
            },
            {
                name: 'L1?', label: 'L1?', filetype: 'hammock', boxcolor: '#FF6600',
                url: 'http://egg.wustl.edu/d/hg19/LINEL1q.gz'
            },
            {
                name: 'L2', label: 'L2', filetype: 'hammock', boxcolor: '#FF6600',
                url: 'http://egg.wustl.edu/d/hg19/LINEL2.gz'
            },
            {
                name: 'Penelope?', label: 'Penelope?', filetype: 'hammock', boxcolor: '#FF6600',
                url: 'http://egg.wustl.edu/d/hg19/LINEPenelopeq.gz'
            },
            {
                name: 'RTE', label: 'RTE', filetype: 'hammock', boxcolor: '#FF6600',
                url: 'http://egg.wustl.edu/d/hg19/LINERTE.gz'
            },
            {
                name: 'RTE-BovB', label: 'RTE-BovB', filetype: 'hammock', boxcolor: '#FF6600',
                url: 'http://egg.wustl.edu/d/hg19/LINERTE-BovB.gz'
            },
        ],
        'SINE class': [
            {
                name: 'Alu', label: 'Alu', filetype: 'hammock', boxcolor: '#cc0000',
                url: 'http://egg.wustl.edu/d/hg19/SINEAlu.gz'
            },
            {
                name: 'Deu', label: 'Deu', filetype: 'hammock', boxcolor: '#cc0000',
                url: 'http://egg.wustl.edu/d/hg19/SINEDeu.gz'
            },
            {
                name: 'MIR', label: 'MIR', filetype: 'hammock', boxcolor: '#cc0000',
                url: 'http://egg.wustl.edu/d/hg19/SINEMIR.gz'
            },
            {
                name: 'SINE', label: 'SINE', filetype: 'hammock', boxcolor: '#cc0000',
                url: 'http://egg.wustl.edu/d/hg19/SINESINE.gz'
            },
            {
                name: 'SINE?', label: 'SINE?', filetype: 'hammock', boxcolor: '#cc0000',
                url: 'http://egg.wustl.edu/d/hg19/SINEqSINEq.gz'
            },
            {
                name: 'tRNA', label: 'tRNA', filetype: 'bed', boxcolor: '#cc0000',
                url: 'http://egg.wustl.edu/d/hg19/SINEtRNA.gz'
            },
        ],
    },

    Conservation: [
        {
            name: 'vertebratephastCons46way', label: 'Vertebrate PhastCons 46-way',
            filetype: 'bedgraph',
            url: 'http://egg.wustl.edu/d/hg19/vertebratephastCons46way.gz',
            details: {
                source: 'UCSC Genome Browser',
                'download date': 'Jan 1, 2012'
            },
            height: 50, colorpositive: '#006385',
        },
        {
            name: 'primatephastCons46way', label: 'Primate PhastCons 46-way',
            filetype: 'bedgraph',
            url: 'http://egg.wustl.edu/d/hg19/primatephastCons46way.gz',
            details: {
                source: 'UCSC Genome Browser',
                'download date': 'Jan 1, 2012'
            },
            height: 50, colorpositive: '#006385',
        },
        {
            name: 'placentalphastCons46way', label: 'Placental PhastCons 46-way',
            filetype: 'bedgraph',
            url: 'http://egg.wustl.edu/d/hg19/placentalphastCons46way.gz',
            details: {
                source: 'UCSC Genome Browser',
                'download date': 'Jan 1, 2012'
            },
            height: 50, colorpositive: '#006385',
        },
        {
            name: 'vertebratephyloP46way', label: 'Vertebrate PhyloP 46-way',
            filetype: 'bedgraph',
            url: 'http://egg.wustl.edu/d/hg19/vertebratephyloP46way.gz',
            details: {
                source: 'UCSC Genome Browser',
                'download date': 'Jan 1, 2012'
            },
            height: 50, colorpositive: '#006385', colornegative: '#852100',
        },
        {
            name: 'primatephyloP46way', label: 'Primate PhyloP 46-way',
            filetype: 'bedgraph',
            url: 'http://egg.wustl.edu/d/hg19/primatephyloP46way.gz',
            details: {
                source: 'UCSC Genome Browser',
                'download date': 'Jan 1, 2012'
            },
            height: 50, colorpositive: '#006385', colornegative: '#852100',
        },
        {
            name: 'placentalphyloP46way', label: 'Placental PhyloP 46-way',
            filetype: 'bedgraph',
            url: 'http://egg.wustl.edu/d/hg19/placentalphyloP46way.gz',
            details: {
                source: 'UCSC Genome Browser',
                'download date': 'Jan 1, 2012'
            },
            height: 50, colorpositive: '#006385', colornegative: '#852100',
        },
    ],

    'G/C related': [
        {
            name: 'cpgisland', label: 'CpG island',
            filetype: 'bed',
            url: 'http://egg.wustl.edu/d/hg19/cpgisland.gz',
        },
        {
            name: 'CpGsites', label: 'CpG sites',
            filetype: 'categorical',
            categories: { 1: ['CpG sites', 'rgb(134,0,179)'], },
            url: 'http://egg.wustl.edu/d/hg19/CpGsites.gz',
        },
        {
            name: 'gc5Base', label: 'GC percent',
            filetype: 'bigwig',
            url: 'http://egg.wustl.edu/d/hg19/gc5Base.bigWig',
            height: 50,
            colorpositive: '#4785C2/#4747C2',
            fixedscale: { min: 0, max: 100 },
        },
    ],

    'Population variation': [
        {
            name: 'snp137', label: 'dbSNP release 137',
            filetype: 'hammock',
            url: 'http://egg.wustl.edu/d/hg19/snp137.gz',
            issnp: true, dbsearch: true,
            cateInfo: {
                1: ['single nucleotide variation', 'rgb(0,102,51)'],
                2: ['insertion/deletion', 'rgb(163,0,82)'],
                3: ['heterozygous variation', 'rgb(154,50,205)'],
                4: ['microsatellite', 'rgb(255,102,0)'],
                5: ['text name but not sequence', '#858585'],
                6: ['a cluster of multiple classes', '#545454'],
                7: ['multiple nucleotide polymorphism', '#990000'],
                8: ['insertion', 'rgb(0,26,255)'],
                9: ['deletion', 'rgb(255,26,0)']
            },
            queryUrl: 'http://www.ncbi.nlm.nih.gov/projects/SNP/snp_ref.cgi?rs='
        },
        {
            name: 'hapmap_r27_MEX_toHg19',
            label: 'hapmap rel27 MEX Mexican ancestry in Los Angeles California USA',
            filetype: 'ld',
            url: 'http://egg.wustl.edu/d/hg19/hapmap_r27_MEX_toHg19.sort.gz',
            showscoreidx: 0, scorenamelst: ["Dprime", "R square", "LOD", "fbin"],
            pcolor: 'rgb(38,38,115)', ncolor: 'rgb(184,0,133)',
            querytrack: { name: "snp137", ft: 24 },
        },
        {
            name: 'hapmap_r27_ASW_toHg19',
            label: 'hapmap rel27 ASW African ancestry in Southwest USA',
            filetype: 'ld',
            url: 'http://egg.wustl.edu/d/hg19/hapmap_r27_ASW_toHg19.sort.gz',
            showscoreidx: 0, scorenamelst: ["Dprime", "R square", "LOD", "fbin"],
            pcolor: 'rgb(0,77,0)', ncolor: 'rgb(184,0,133)',
            querytrack: { name: "snp137", ft: 24 },
        },
        {
            name: 'hapmap_r27_CEU_toHg19',
            label: 'hapmap rel27 CEU Utah residents with Northern and Western European ancestry from the CEPH collection',
            filetype: 'ld',
            url: 'http://egg.wustl.edu/d/hg19/hapmap_r27_CEU_toHg19.sort.gz',
            showscoreidx: 0, scorenamelst: ["Dprime", "R square", "LOD", "fbin"],
            pcolor: 'rgb(0,77,77)', ncolor: 'rgb(184,0,133)',
            querytrack: { name: "snp137", ft: 24 },
        },
        {
            name: 'hapmap_r27_CHB_toHg19',
            label: 'hapmap rel27 CHB Han Chinese in Beijing China',
            filetype: 'ld',
            url: 'http://egg.wustl.edu/d/hg19/hapmap_r27_CHB_toHg19.sort.gz',
            showscoreidx: 0, scorenamelst: ["Dprime", "R square", "LOD", "fbin"],
            pcolor: 'rgb(77,77,0)', ncolor: 'rgb(184,0,133)',
            querytrack: { name: "snp137", ft: 24 },
        },
        {
            name: 'hapmap_r27_CHD_toHg19',
            label: 'hapmap rel27 CHD Chinese in Metropolitan Denver Colorado USA',
            filetype: 'ld',
            url: 'http://egg.wustl.edu/d/hg19/hapmap_r27_CHD_toHg19.sort.gz',
            showscoreidx: 0, scorenamelst: ["Dprime", "R square", "LOD", "fbin"],
            pcolor: 'rgb(77,0,77)', ncolor: 'rgb(184,0,133)',
            querytrack: { name: "snp137", ft: 24 },
        },
        {
            name: 'hapmap_r27_GIH_toHg19',
            label: 'hapmap rel27 GIH Gujarati Indians in Houston Texas USA',
            filetype: 'ld',
            url: 'http://egg.wustl.edu/d/hg19/hapmap_r27_GIH_toHg19.sort.gz',
            showscoreidx: 0, scorenamelst: ["Dprime", "R square", "LOD", "fbin"],
            pcolor: 'rgb(77,0,0)', ncolor: 'rgb(184,0,133)',
            querytrack: { name: "snp137", ft: 24 },
        },
        {
            name: 'hapmap_r27_JPT_toHg19',
            label: 'hapmap rel27 JPT Japanese in Tokyo Japan',
            filetype: 'ld',
            url: 'http://egg.wustl.edu/d/hg19/hapmap_r27_JPT_toHg19.sort.gz',
            showscoreidx: 0, scorenamelst: ["Dprime", "R square", "LOD", "fbin"],
            pcolor: 'rgb(184,0,138)', ncolor: 'rgb(0,99,133)',
            querytrack: { name: "snp137", ft: 24 },
        },
        {
            name: 'hapmap_r27_LWK_toHg19',
            label: 'hapmap rel27 LWK Luhya in Webuye Kenya',
            filetype: 'ld',
            url: 'http://egg.wustl.edu/d/hg19/hapmap_r27_LWK_toHg19.sort.gz',
            showscoreidx: 0, scorenamelst: ["Dprime", "R square", "LOD", "fbin"],
            pcolor: 'rgb(115,38,77)', ncolor: 'rgb(184,0,133)',
            querytrack: { name: "snp137", ft: 24 },
        },
        {
            name: 'hapmap_r27_MKK_toHg19',
            label: 'hapmap rel27 MKK Maasai in Kinyawa Kenya',
            filetype: 'ld',
            url: 'http://egg.wustl.edu/d/hg19/hapmap_r27_MKK_toHg19.sort.gz',
            showscoreidx: 0, scorenamelst: ["Dprime", "R square", "LOD", "fbin"],
            pcolor: 'rgb(77,38,115)', ncolor: 'rgb(184,0,133)',
            querytrack: { name: "snp137", ft: 24 },
        },
        {
            name: 'hapmap_r27_TSI_toHg19',
            label: 'hapmap rel27 TSI Toscans in Italy',
            filetype: 'ld',
            url: 'http://egg.wustl.edu/d/hg19/hapmap_r27_TSI_toHg19.sort.gz',
            showscoreidx: 0, scorenamelst: ["Dprime", "R square", "LOD", "fbin"],
            pcolor: 'rgb(38,77,115)', ncolor: 'rgb(184,0,133)',
            querytrack: { name: "snp137", ft: 24 },
        },
        {
            name: 'hapmap_r27_YRI_toHg19',
            label: 'hapmap rel27 YRI Yoruba in Ibadan Nigeria',
            filetype: 'ld',
            url: 'http://egg.wustl.edu/d/hg19/hapmap_r27_YRI_toHg19.sort.gz',
            showscoreidx: 0, scorenamelst: ["Dprime", "R square", "LOD", "fbin"],
            pcolor: 'rgb(204,41,0)', ncolor: 'rgb(184,0,133)',
            querytrack: { name: "snp137", ft: 24 },
        },
    ],

    'Genome comparison': [
        {
            name: 'mm9tohg19', label: 'Mouse mm9 to hg19 blastz', querygenome: 'mm9',
            filetype: 'genomealign',
            url: 'http://vizhub.wustl.edu/public/hg19/weaver/hg19_mm9_axt.gz',
            details: {
                source: 'UCSC Genome Browser',
                'download url': 'http://hgdownload.soe.ucsc.edu/goldenPath/hg19/vsMm9/',
                'download date': 'May 1, 2014',
            },
        },
        {
            name: 'mm10tohg19', label: 'Mouse mm10 to hg19 blastz', querygenome: 'mm10',
            filetype: 'genomealign',
            url: 'http://vizhub.wustl.edu/public/hg19/weaver/hg19_mm10_axt.gz',
            details: {
                source: 'UCSC Genome Browser',
                'download url': 'http://hgdownload.soe.ucsc.edu/goldenPath/hg19/vsMm10/',
                'download date': 'Aug 8, 2014',
            },
        },
        {
            name: 'rn4tohg19', label: 'Rat rn4 to hg19 blastz', querygenome: 'rn4',
            filetype: 'genomealign',
            url: 'http://vizhub.wustl.edu/public/hg19/weaver/hg19_rn4_axt.gz',
            details: {
                source: 'UCSC Genome Browser',
                'download url': 'http://hgdownload.soe.ucsc.edu/goldenPath/hg19/vsRn4/',
                'download date': 'Aug 8, 2014',
            },
        },
        {
            name: 'rn5tohg19', label: 'Rat rn5 to hg19 blastz', querygenome: 'rn5',
            filetype: 'genomealign',
            url: 'http://vizhub.wustl.edu/public/hg19/weaver/hg19_rn5_axt.gz',
            details: {
                source: 'UCSC Genome Browser',
                'download url': 'http://hgdownload.soe.ucsc.edu/goldenPath/hg19/vsRn5/',
                'download date': 'Aug 8, 2014',
            },
        },
        {
            name: 'rheMac3tohg19', label: 'Rhesus macaque rheMac3 to hg19 blastz', querygenome: 'rheMac3',
            filetype: 'genomealign',
            url: 'http://vizhub.wustl.edu/public/hg19/weaver/hg19_rheMac3_axt.gz',
            details: {
                source: 'UCSC Genome Browser',
                'download url': 'http://hgdownload.soe.ucsc.edu/goldenPath/hg19/vsRheMac3/',
                'download date': 'Aug 8, 2014',
            },
        },
        {
            name: 'cavPor3tohg19', label: 'Guinea pig cavPor3 to hg19 blastz', querygenome: 'cavPor3',
            filetype: 'genomealign',
            url: 'http://vizhub.wustl.edu/public/hg19/weaver/hg19_cavPor3_axt.gz',
            details: {
                source: 'UCSC Genome Browser',
                'download url': 'http://hgdownload.soe.ucsc.edu/goldenPath/hg19/vsCavPor3/',
                'download date': 'Aug 8, 2014',
            },
        },
        {
            name: 'danRer7tohg19', label: 'Zebrafish danRer7 to hg19 blastz', querygenome: 'danRer7',
            filetype: 'genomealign',
            url: 'http://vizhub.wustl.edu/public/hg19/weaver/hg19_danRer7_axt.gz',
            details: {
                source: 'UCSC Genome Browser',
                'download url': 'http://hgdownload.soe.ucsc.edu/goldenPath/hg19/vsDanRer7/',
                'download date': 'Aug 8, 2014',
            },
        },
    ],

    'MRE cut sites': [
        {
            name: 'ACGTsites', label: 'ACGT Sites (HpyCH4IV)',
            filetype: 'categorical',
            categories: { 1: ['ACGT Sites (HpyCH4IV)', '#FF0000'], },
            url: 'http://egg.wustl.edu/d/hg19/ACGTsites.gz',
        },
        {
            name: 'ACGTfrags', label: 'ACGT 50-500bp Fragments (HpyCH4IV)',
            filetype: 'hammock',
            url: 'http://egg.wustl.edu/d/hg19/ACGTfrags.gz',
            'textcolor': 'rgb(0,0,0)', 'fontsize': '8pt', 'fontfamily': 'sans-serif', 'fontbold': false, 'bedcolor': '#FF0000'
        },
        {
            name: 'CCGCsites', label: 'CCGC Sites (AciI, SsiI)',
            filetype: 'categorical',
            categories: { 1: ['CCGC Sites (AciI, SsiI)', '#0000FF'], },
            url: 'http://egg.wustl.edu/d/hg19/CCGCsites.gz',
        },
        {
            name: 'CCGCfrags', label: 'CCGC 50-500bp Fragments (AciI, SsiI)',
            filetype: 'hammock',
            url: 'http://egg.wustl.edu/d/hg19/CCGCfrags.gz',
            'textcolor': 'rgb(0,0,0)', 'fontsize': '8pt', 'fontfamily': 'sans-serif', 'fontbold': false, 'bedcolor': '#0000FF'
        },
        {
            name: 'CCGGsites', label: 'CCGG Sites (HpaII, HapII)',
            filetype: 'categorical',
            categories: { 1: ['CCGG Sites (HpaII, HapII)', '#008040'], },
            url: 'http://egg.wustl.edu/d/hg19/CCGGsites.gz',
        },
        {
            name: 'CCGGfrags', label: 'CCGG 50-500bp Fragments (HpaII, HapII)',
            filetype: 'hammock',
            url: 'http://egg.wustl.edu/d/hg19/CCGGfrags.gz',
            'textcolor': 'rgb(0,0,0)', 'fontsize': '8pt', 'fontfamily': 'sans-serif', 'fontbold': false, 'bedcolor': '#008040'
        },
        {
            name: 'CGCGsites', label: 'CGCG Sites (BstUI)',
            filetype: 'categorical',
            categories: { 1: ['CGCG Sites (BstUI)', '#CC6600'], },
            url: 'http://egg.wustl.edu/d/hg19/CGCGsites.gz',
        },
        {
            name: 'CGCGfrags', label: 'CGCG 50-500bp Fragments (BstUI)',
            filetype: 'hammock',
            url: 'http://egg.wustl.edu/d/hg19/CGCGfrags.gz',
            'textcolor': 'rgb(0,0,0)', 'fontsize': '8pt', 'fontfamily': 'sans-serif', 'fontbold': false, 'bedcolor': '#CC6600'
        },
        {
            name: 'GCGCsites', label: 'GCGC Sites (HhaI, Hin6I)',
            filetype: 'categorical',
            categories: { 1: ['GCGC Sites (HhaI, Hin6I)', '#5900B3'], },
            url: 'http://egg.wustl.edu/d/hg19/GCGCsites.gz',
        },
        {
            name: 'GCGCfrags', label: 'GCGC 50-500bp Fragments (HhaI, Hin6I)',
            filetype: 'hammock',
            url: 'http://egg.wustl.edu/d/hg19/GCGCfrags.gz',
            'textcolor': 'rgb(0,0,0)', 'fontsize': '8pt', 'fontfamily': 'sans-serif', 'fontbold': false, 'bedcolor': '#5900B3'
        },
    ],
    'Mappability': [
        {
            name: 'wgEncodeCrgMapabilityAlign100mer', label: '100mer alignability ENCODE/CRG(Guigo)',
            filetype: 'bigwig',
            url: 'http://egg.wustl.edu/d/hg19/wgEncodeCrgMapabilityAlign100mer.bigWig',
            height: 50,
            fixedscale: { min: 0, max: 1 },
            details: {
                dataType: 'Mapability',
                subId: 4945,
                size: '100mer',
                uniqueness: 'no more than 2 mismatches',
                software: 'GEM',
                download: 'http://hgdownload.cse.ucsc.edu/goldenPath/hg19/encodeDCC/wgEncodeMapability/'
            }
        },
        {
            name: 'wgEncodeCrgMapabilityAlign75mer', label: '75mer alignability ENCODE/CRG(Guigo)',
            filetype: 'bigwig',
            url: 'http://egg.wustl.edu/d/hg19/wgEncodeCrgMapabilityAlign75mer.bigWig',
            height: 50,
            fixedscale: { min: 0, max: 1 },
            details: {
                dataType: 'Mapability',
                subId: 4945,
                size: '75mer',
                uniqueness: 'no more than 2 mismatches',
                software: 'GEM',
                download: 'http://hgdownload.cse.ucsc.edu/goldenPath/hg19/encodeDCC/wgEncodeMapability/'
            }
        },
        {
            name: 'wgEncodeCrgMapabilityAlign50mer', label: '50mer alignability ENCODE/CRG(Guigo)',
            filetype: 'bigwig',
            url: 'http://egg.wustl.edu/d/hg19/wgEncodeCrgMapabilityAlign50mer.bigWig',
            height: 50,
            fixedscale: { min: 0, max: 1 },
            details: {
                dataType: 'Mapability',
                subId: 4945,
                size: '50mer',
                uniqueness: 'no more than 2 mismatches',
                software: 'GEM',
                download: 'http://hgdownload.cse.ucsc.edu/goldenPath/hg19/encodeDCC/wgEncodeMapability/'
            }
        },
        {
            name: 'wgEncodeCrgMapabilityAlign40mer', label: '40mer alignability ENCODE/CRG(Guigo)',
            filetype: 'bigwig',
            url: 'http://egg.wustl.edu/d/hg19/wgEncodeCrgMapabilityAlign40mer.bigWig',
            height: 50,
            fixedscale: { min: 0, max: 1 },
            details: {
                dataType: 'Mapability',
                subId: 4945,
                size: '40mer',
                uniqueness: 'no more than 2 mismatches',
                software: 'GEM',
                download: 'http://hgdownload.cse.ucsc.edu/goldenPath/hg19/encodeDCC/wgEncodeMapability/'
            }
        },
        {
            name: 'wgEncodeCrgMapabilityAlign36mer', label: '36mer alignability ENCODE/CRG(Guigo)',
            filetype: 'bigwig',
            url: 'http://egg.wustl.edu/d/hg19/wgEncodeCrgMapabilityAlign36mer.bigWig',
            height: 50,
            fixedscale: { min: 0, max: 1 },
            details: {
                dataType: 'Mapability',
                subId: 4945,
                size: '36mer',
                uniqueness: 'no more than 2 mismatches',
                software: 'GEM',
                download: 'http://hgdownload.cse.ucsc.edu/goldenPath/hg19/encodeDCC/wgEncodeMapability/'
            }
        },
        {
            name: 'wgEncodeCrgMapabilityAlign24mer', label: '24mer alignability ENCODE/CRG(Guigo)',
            filetype: 'bigwig',
            url: 'http://egg.wustl.edu/d/hg19/wgEncodeCrgMapabilityAlign24mer.bigWig',
            height: 50,
            fixedscale: { min: 0, max: 1 },
            details: {
                dataType: 'Mapability',
                subId: 4945,
                size: '24mer',
                uniqueness: 'no more than 2 mismatches',
                software: 'GEM',
                download: 'http://hgdownload.cse.ucsc.edu/goldenPath/hg19/encodeDCC/wgEncodeMapability/'
            }
        },
    ],
}

export default annotationTracks;