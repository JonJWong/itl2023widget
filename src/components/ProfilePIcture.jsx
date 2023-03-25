const ProfilePicture = (props) => {
  const { url } = props;
  return (
    <div className="profile-picture">
      <img src={url} />
    </div>
  );
};

export default ProfilePicture;
