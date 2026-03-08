import type { ComponentProps } from 'react';
import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';

type DocsLayoutChildren = ComponentProps<typeof DocsLayout>['children'];

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout tree={source.getPageTree()} {...baseOptions()}>
      {children as DocsLayoutChildren}
    </DocsLayout>
  );
}
