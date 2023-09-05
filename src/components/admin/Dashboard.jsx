import AppInfoBox from '../AppInfoBox';
import LatesUploads from '../LatesUploads';

function Dashboard() {
  return (
    <div className='grid grid-cols-3 gap-5 my-5'>
      <AppInfoBox title='Totle Uploads' subTitle='100' />
      <AppInfoBox title='Totle Reviews' subTitle='1,500' />
      <AppInfoBox title='Totle Users' subTitle='200' />

      <LatesUploads />
    </div>
  );
}

export default Dashboard;
