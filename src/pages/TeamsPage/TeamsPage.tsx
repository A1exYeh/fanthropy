import TeamButton from "../../components/TeamButton";

const teams = [
    {team: 'Raiders', imgSrc: '../assets/logo-raiders.svg', label: 'Las Vegas Raiders' },
    {team: 'Raiders2', imgSrc: '../assets/logo-raiders.svg', label: 'Las Vegas Raiders 2' },
    {team: 'Raiders3', imgSrc: '../assets/logo-raiders.svg', label: 'Las Vegas Raiders 3' }
];

const TeamsPage : React.FC = () => {

    const handleTeamSelect = (team: string) => {
        console.log (`Team Selected: ${team}`);
    }

    return (
        <div>
            {/* map through the teams array with destructured variables, return a TeamButton FC
                for each element in teams.  */}
            {teams.map(({team, imgSrc, label}) => (
                <TeamButton 
                key = {team}
                onClick = { () => handleTeamSelect(team)}
                imgSrc= {imgSrc}
                label = {label}
                />
            ))}
        </div>
    );
};

export default TeamsPage;