import BoardInput from '@/components/Board/BoardInput';
import PrimaryLayout from 'src/components/layouts/PrimaryLayout';
import SampleModal from 'src/components/modals/SampleModal';
import { PageWithLayout } from 'src/types/page';

export default function Home(_: PageWithLayout) {
  return (
    <>
      <section className="flex flex-col justify-center items-center h-screen w-screen">
        <p className="text-2xl mb-4">Sudoku Solver</p>
        <BoardInput />
      </section>
      <SampleModal />
    </>
  );
}

Home.getLayout = (page: React.ReactNode) => <PrimaryLayout title="Sudoku Solver">{page}</PrimaryLayout>;
