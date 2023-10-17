import './style.scss';

const ProfileCard = () => {
  return (
    <div className='profile-card'>
      <div className='avatar'>
        <img
          src='https://s3-alpha-sig.figma.com/img/ce62/3c01/331e494656939cd5e490202dd312c2f1?Expires=1698019200&Signature=Y-2sPv8zz~ywBSap1xkA0ADRQjQTr-OFJ2LAaakMrf3GB7DH0mH41jXVKi7~Ht7pEVgIMtPbepWjjgGqP2lwwzf9myiZCJI-0P7JaCkYgdXH8C0HVw1dL5z-hpjpo9p~XOdxAB-53lb9J2~dHngIjc16bBEyiCkDbndP08~DiinoK0ad2-IUypiGv~TUvLaQ7endMyIJKohSv~o3O~BDDdhkU4-0FeQoLonQN3g1FEUM4E41qfTaogAQN9U9N-vP032ul0jzDqG1Os4XDrtRwQDOfuQD09ooPLzATRFznMKf2uUOcfiNwh4QLDGmoPFWx63OeQ19iNmFDffnVoWn2w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
          alt='avatar'
          width={130}
          height={130}
        />
      </div>
      <div className='details'>
        <div className='user-name'>Annie Leonchart</div>
        <div className='user-email'>annie_leonchart@mail.com</div>
        <div className='lesson-details'>
          <div className='lessons'>
            <h4>Lessons</h4>
            <p>24</p>
          </div>
          <div className='terms'>
            <h4>Terms</h4>
            <p>1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
