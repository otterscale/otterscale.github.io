import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Hyper-Converged Infrastructure',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        OtterScale unifies compute, storage, networking, and orchestration into
        a single platform for simplified, scalable, enterprise-grade data center
        operations.
      </>
    ),
  },
  {
    title: 'Enterprise-Grade Features',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Built-in KVM/QEMU virtualization, Kubernetes orchestration, Ceph
        distributed storage, and integrated monitoring with{' '}
        <code>Prometheus</code> and <code>Grafana</code>.
      </>
    ),
  },
  {
    title: 'High Availability & Security',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Multi-node deployment with automatic failover, RBAC with LDAP/AD
        integration, SSO support, and a curated application marketplace for
        enterprise workloads.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
