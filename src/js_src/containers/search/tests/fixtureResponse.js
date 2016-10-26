/*eslint-disable quotes */

const FIXTURE_HREF = 'https://google.com';

export default {
  "aggregations": [
    {
      "key": "category", 
      "values": [
        {
          "key": "gene", 
          "total": 322
        }
      ]
    }
  ], 
  "results": [
    {
      "highlights": {
        "description": [
          "<em>kinase</em> activity"
        ], 
        "name": [
          "<em>GTPase</em> activity"
        ]
      }, 
      "href": "http://www.yeastgenome.org/locus/S000005759/overview", 
      "name": "GTPase activity",
      "go_branch": "Molecular Function",
      "synonym": "YOR233W", 
      "type": null,
      "category": "go"
    }, 
    {
      "highlights": {
        "description": [
          "<em>Huntington's</em> disease", 
        ], 
        "name": [
          "<em>Huntington's</em> disease"
        ]
      }, 
      "href": "http://omim.org/entry/143100", 
      "name": "Huntington's disease", 
      "omim_id": "143100", 
      "synonym": "HUNTINGTON CHOREA", 
      "category": "disease"
    }, 
    {
      "highlights": {
        "name": [
          "<em>Group</em>123"
        ]
      }, 
      "href": "http://omim.org/entry/143100", 
      "name": "Group 123", 
      "synonym": "syn1243", 
      "category": "ortholog group"
    },     {
      "highlights": {
        "go_names": [
          "adenylate <em>kinase</em> activity", 
          "<em>kinase</em> activity", 
          "nucleobase-containing compound <em>kinase</em> activity"
        ], 
        "name": [
          "ADenylate <em>Kinase</em>"
        ]
      }, 
      "href": "http://www.yeastgenome.org/locus/S000002634/overview", 
      "name": "ADenylate Kinase", 
      "organism": "yeast", 
      "gene_symbol": "ADK1", 
      "synonym": "YDR226W", 
      "type": null,
      "category": "gene",
      "orthologs": [
        {
          "symbol": 'abc1',
          "href": FIXTURE_HREF,
          "evidences": [
            { "name": 'PANTHER' }
          ]
        },
        {
          "symbol": 'xyz2',
          "href": FIXTURE_HREF,
          "evidences": [
            { "name": 'PANTHER' },
            { "name": 'DIOPT' }
          ]
        }
      ]
    }, 
    {
      "highlights": {
        "go_names": [
          "choline <em>kinase</em> activity", 
          "ethanolamine <em>kinase</em> activity", 
          "<em>kinase</em> activity"
        ], 
        "name": [
          "Ethanolamine <em>KInase</em>"
        ]
      }, 
      "href": "http://www.yeastgenome.org/locus/S000002554/overview", 
      "name": "Ethanolamine KInase", 
      "organism": "yeast", 
      "gene_symbol": "EKI1", 
      "synonym": "YDR147W", 
      "type": null,
      "category": "gene"
    }, 
    {
      "highlights": {
        "go_names": [
          "<em>kinase</em> activity", 
          "MAP <em>kinase</em> <em>kinase</em> activity", 
          "protein <em>kinase</em> activity", 
          "protein serine/threonine <em>kinase</em> activity", 
          "protein tyrosine <em>kinase</em> activity"
        ], 
        "name": [
          "Mitogen-activated <em>Kinase</em> <em>Kinase</em>"
        ]
      }, 
      "href": "http://www.yeastgenome.org/locus/S000006061/overview", 
      "name": "Mitogen-activated Kinase Kinase", 
      "organism": "yeast", 
      "gene_symbol": "MKK2", 
      "synonym": "YPL140C", 
      "type": null,
      "category": "gene"
    }, 
    {
      "highlights": {
        "go_names": [
          "glycerone <em>kinase</em> activity", 
          "<em>kinase</em> activity"
        ], 
        "name": [
          "DihydroxyAcetone <em>Kinase</em>"
        ]
      }, 
      "href": "http://www.yeastgenome.org/locus/S000001841/overview", 
      "name": "DihydroxyAcetone Kinase", 
      "organism": "yeast", 
      "gene_symbol": "DAK2", 
      "synonym": "YFL053W", 
      "type": null,
      "category": "gene"
    }, 
    {
      "highlights": {
        "go_names": [
          "adenylate <em>kinase</em> activity", 
          "<em>kinase</em> activity", 
          "nucleobase-containing compound <em>kinase</em> activity", 
          "nucleoside triphosphate adenylate <em>kinase</em> activity"
        ], 
        "name": [
          "ADenylate <em>Kinase</em>"
        ]
      }, 
      "href": "http://www.yeastgenome.org/locus/S000000972/overview", 
      "name": "ADenylate Kinase", 
      "organism": "yeast", 
      "gene_symbol": "ADK2", 
      "synonym": "YER170W", 
      "type": null,
      "category": "gene"
    }, 
    {
      "highlights": {
        "go_names": [
          "<em>kinase</em> activity", 
          "protein <em>kinase</em> activity", 
          "protein serine/threonine <em>kinase</em> activity"
        ], 
        "name": [
          "CHeckpoint <em>Kinase</em>"
        ]
      }, 
      "href": "http://www.yeastgenome.org/locus/S000000478/overview", 
      "name": "CHeckpoint Kinase", 
      "organism": "yeast", 
      "gene_symbol": "CHK1", 
      "synonym": "YBR274W", 
      "type": null,
      "category": "gene"
    }, 
    {
      "highlights": {
        "go_names": [
          "guanylate <em>kinase</em> activity", 
          "<em>kinase</em> activity"
        ], 
        "name": [
          "GUanylate <em>Kinase</em>"
        ]
      }, 
      "href": "http://www.yeastgenome.org/locus/S000002862/overview", 
      "name": "GUanylate Kinase", 
      "organism": "yeast", 
      "gene_symbol": "GUK1", 
      "synonym": "YDR454C", 
      "type": null,
      "category": "gene"
    }
  ], 
  "total": 322
};