'use client'

import { Button } from '@codecentrum/piksel-ui'
import { Docs } from '@contentlayer'
import { getMDXComponent } from 'next-contentlayer/hooks'

export default function ContentMDX({ value }: { value: Docs }) {
  const Content = getMDXComponent(value?.body.code)
  return <Content components={{ Button }} />
}
