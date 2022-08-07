import { ReactComponent as AvatarBg } from '../assets/svg/avatar-bg.svg';
import { ReactComponent as Avatar } from '../assets/svg/avatar.svg';
import { ReactComponent as GithubIcon } from '../assets/svg/github.svg';
import { ReactComponent as InstagramIcon } from '../assets/svg/instagram.svg';
import { ReactComponent as StackOverFlowIcon } from '../assets/svg/stackoverflow.svg';
import { ReactComponent as TwitterIcon } from '../assets/svg/twitter.svg';

const Profile = (): JSX.Element => {
    return (
        <div className="card profile">
            <div className="profile__avatar">
                <AvatarBg />
                <Avatar />
            </div>

            <div className="profile__name">Amin Rostami</div>
            <div className="profile__description">
                Love to learn, Love to find solution for the problems.
            </div>
            <div className="profile__links">
                <a href="https://github.com/AmRo045" target="_blank">
                    <GithubIcon />
                </a>
                <a href="https://instagram.com/AmRo045" target="_blank">
                    <InstagramIcon />
                </a>
                <a
                    href="https://stackoverflow.com/users/11219312/amro"
                    target="_blank"
                >
                    <StackOverFlowIcon />
                </a>
                <a href="https://twitter.com/AmRo045" target="_blank">
                    <TwitterIcon />
                </a>
            </div>
        </div>
    );
};

export default Profile;
