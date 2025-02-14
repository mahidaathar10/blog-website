
import { Data } from '../../allpage/data';
import Image from 'next/image';
import Wrapper from '@/app/wrapper/wrapper';
import Comment from '@/app/wrapper/comment';

interface Iparams {
  id: string;
}
// Function to generate static paths
export async function generateStaticParams() {
  return Data.map((item) => ({
    id: item.id,
  }));
}

const IdPage = async ({ params }: { params:Promise<Iparams> }) => {
  const {id} =await  params;
  const res = Data.find((item) => item.id === id);

  if (!res) {
    return <div>Data not found</div>; // Handle missing data
  }

  return (
    <div className="bg-white">
      <Wrapper>
        <div className="space-y-4">
          <h2 className="text-3xl underline font-bold">{res.heading}</h2>
          <Image src={res?.image as string} alt="images" width={500} height={500} />
          <h2 className="text-2xl font-bold">Created By : {res.createdby}</h2>

          <h2 className="font-semibold">{res.description}</h2>
          <h2 className="text-2xl font-bold">Use :</h2>
          <h3 className="font-semibold">{res.usecase}</h3>
          <h2 className="font-semibold">Release Date : {res.date}</h2>

          <h3 className="font-bold text-2xl">Future of {res.heading} :</h3>
          <h3 className="futureline">{res.future}</h3>

          <Comment />
        </div>
      </Wrapper>
    </div>
  );
};

export default IdPage;
