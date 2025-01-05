import TeamButton from "../../components/TeamButton";
import RaidersLogo from '../../assets/logo-raiders.svg';
import { useNavigate } from 'react-router';

const teams = [
    {team: 'Raiders', imgSrc: RaidersLogo, label: 'Raiders', bgColor: 'black' },
    {team: 'Aces', imgSrc: RaidersLogo, label: 'Aces', bgColor: 'red' },
    {team: 'Athletics', imgSrc: RaidersLogo, label: 'Athletics', bgColor: 'green' },
    {team: 'Golden Knights', imgSrc: RaidersLogo, label: 'Golden Knights', bgColor: 'gold' }
];


const TeamsPage : React.FC = () => {
    let navigate = useNavigate();

    const handleTeamSelect = (team: string) => {
        console.log (`Team Selected: ${team}`);
        navigate('/orgs');
    }

    return (
        <>
        <div className="flex flex-col justify-center items-center w-screen-sm gap-8 h-screen">
            {/* map through the teams array with destructured variables, return a TeamButton FC
                for each element in teams.  */}
            {teams.map(({team, imgSrc, label, bgColor}) => (
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

export default TeamsPage;