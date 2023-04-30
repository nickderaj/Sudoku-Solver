import BoardInput from '@/components/Board/BoardInput';
import PrimaryLayout from 'src/components/layouts/PrimaryLayout';
import SampleModal from 'src/components/modals/SampleModal';
import { PageWithLayout } from 'src/types/page';

export default function Home(_: PageWithLayout) {
  return (
    <>
      <section className="flex justify-center items-center h-screen w-screen">
        <BoardInput />
      </section>
      <SampleModal />
    </>
  );
}

Home.getLayout = (page: React.ReactNode) => <PrimaryLayout title="Home Page">{page}</PrimaryLayout>;
