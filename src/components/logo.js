/** @jsxImportSource theme-ui */

import { jsx, Image } from 'theme-ui';
import { Link } from '@/components/link';

export default function Logo() {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
      }}
    >
      <Image src={"https://d1twk979um3kr8.cloudfront.net/d87e81ae-ab30-4c15-93a5-74432236b022/image/dark.svg"} sx={{ display: 'flex' }} alt="startup landing logo" />
    </Link>
  );
}
