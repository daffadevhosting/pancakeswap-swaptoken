import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
      {
        label: 'Nft Marketplace',
        href: 'https://simplnft-marketplace.vercel.app/',
      },
      {
        label: 'Staking NFT',
        href: 'https://simplnft-marketplace.vercel.app/stake',
      },
    ],
  },
]

export default config
