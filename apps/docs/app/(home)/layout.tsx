import type { ComponentProps } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';

type HomeLayoutChildren = ComponentProps<typeof HomeLayout>['children'];

export default function Layout({ children }: LayoutProps<'/'>) {
  return <HomeLayout {...baseOptions()}>{children as HomeLayoutChildren}</HomeLayout>;
}
