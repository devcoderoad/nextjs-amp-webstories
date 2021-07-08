/* Components */
import { Row, Container, Col, Card, CardBody } from 'reactstrap';

import Layout from '../layouts/Default';
import HeadDefault from '../components/heads/HeadDefault';
import Header from '../components/Header';
import Footer from '../components/Footer';

/* AMP */
import { useAmp } from 'next/amp';
export const config = { amp: 'hybrid' };

export default function Home(props) {
  const isAmp = useAmp();
  const meta = {
    title: 'Home Page',
    description: 'Description',
  };
  return (
    <>
      <HeadDefault meta={meta} isAmp={isAmp} />
      <Layout>
        <Header isAmp={isAmp} />
        <main>
          <Container className="my-5 py-5">
            <Row>
              <Col>
                <h1>
                  Welcome to <a href="https://nextjs.org">Next.js!</a>
                </h1>
                <p className="mb-lg-4">
                  Get started by editing <code>pages/index.js</code>
                </p>
              </Col>
            </Row>
            <Row>
              <Col md="6" className="mb-3">
                <Card color="dark">
                  <a className="text-white" href="https://nextjs.org/docs">
                    <h3 className="card-header">Documentation &rarr;</h3>
                    <CardBody tag="p">
                      Find in-depth information about Next.js features and API.
                    </CardBody>
                  </a>
                </Card>
              </Col>
              <Col md="6" className="mb-3">
                <Card color="dark">
                  <a className="text-white" href="https://nextjs.org/learn">
                    <h3 className="card-header">Learn &rarr;</h3>
                    <CardBody tag="p">
                      Learn about Next.js in an interactive course with quizzes!
                    </CardBody>
                  </a>
                </Card>
              </Col>
              <Col md="6" className="mb-3">
                <Card color="dark">
                  <a
                    className="text-white"
                    href="https://github.com/vercel/next.js/tree/master/examples"
                  >
                    <h3 className="card-header">Examples &rarr;</h3>
                    <CardBody tag="p">
                      Discover and deploy boilerplate example Next.js projects.
                    </CardBody>
                  </a>
                </Card>
              </Col>
              <Col md="6" className="mb-3">
                <Card color="dark">
                  <a
                    className="text-white"
                    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                  >
                    <h3 className="card-header">Deploy &rarr;</h3>
                    <CardBody tag="p">
                      Instantly deploy your Next.js site to a public URL with
                      Vercel.
                    </CardBody>
                  </a>
                </Card>
              </Col>
            </Row>
          </Container>
        </main>
        <Footer isAmp={isAmp} />
      </Layout>
    </>
  );
}
