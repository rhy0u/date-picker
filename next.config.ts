import type { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "eu.ui-avatars.com",
      "avatars.dicebear.com",
      `${process.env.AWS_BUCKET}.s3.eu-west-3.amazonaws.com`,
    ],
  },
}

export default withNextIntl(nextConfig)
