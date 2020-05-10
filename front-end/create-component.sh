#!/usr/bin/env bash

INDEX_EXPORT_BOILERPLATE="export * from './$1'"
COMPONENT_BOILERPLATE="import React from 'react'
import { any } from 'prop-types'


const propTypes = {
  children: any,
}

const $1 = ({ children }) => {
  return (

  )
}

$1.propTypes = propTypes

export { $1 }"

mkdir "src/components/$1"

echo "$COMPONENT_BOILERPLATE" > "src/components/$1/$1.js"
echo $INDEX_EXPORT_BOILERPLATE > "src/components/$1/index.js"
