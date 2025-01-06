import TeamButton from "../../components/TeamButton";
import ThreeSquareLogo from '../../assets/three-square-logo.png';
import { useNavigate } from 'react-router';

const organizations = [
    {team: 'ThreeSquare', imgSrc: ThreeSquareLogo, label: 'ThreeSquare', bgColor: 'black' },
    {team: 'ThreeSquare', imgSrc: ThreeSquareLogo, label: 'ThreeSquare', bgColor: 'red' },
    {team: 'ThreeSquare', imgSrc: ThreeSquareLogo, label: 'ThreeSquare', bgColor: 'green' },
    {team: 'ThreeSquare Knights', imgSrc: ThreeSquareLogo, label: 'ThreeSquare', bgColor: 'gold' }
];

const OrgsPage : React.FC = () => {
    let navigate = useNavigate();
    const handleTeamSelect = (team: string) => {
        console.log (`Team Selected: ${team}`);
        navigate('/orgs/threesquare');
    }

    return (
        <>
        <div className="flex flex-col justify-center items-center w-screen-sm gap-8 h-screen">
            {/* map through the teams array with destructured variables, return a TeamButton FC
                for each element in teams.  */}
            {organizations.map(({team, imgSrc, label, bgColor}) => (
                <TeamButton 
                key = {team}
                onClick = { () => handleTeamSelect(team)}
                imgSrc= {imgSrc}
                label = {label}
                bgColor = {bgColor}
                />
            ))}
        </div>
        </>
    );
};

export default OrgsPage;