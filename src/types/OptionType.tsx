type OptionType = {
  color?: {
    backgroundColor?: string,
    borderColor?: string,
    headTitle?: string,
    headTitleHover?: string,
    description?: string,
    itemTitle?: string,
    itemTitleHover?: string,
  },
  fullWidth?: boolean,
  image?: ImageType,
  CTA?: CTAType,
  responsive?: boolean,
}

type CTAType = {
  title?: string,
  description?: string,
  button: React.ReactNode,
}

type ImageType = {
  src: string,
  href?: string,
  title?: string,
  button?: React.ReactNode,
}

export type {
  OptionType
}