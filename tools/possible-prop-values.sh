#!/bin/bash
# . [DEFINITIONS_FILE_PATH] [PROPERTY]

cat $1 | grep \"$2\" | cut -d":" -f 2 | cut -d\" -f 2 | sort | uniq