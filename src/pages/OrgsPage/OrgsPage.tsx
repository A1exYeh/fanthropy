import TeamButton from "../../components/TeamButton";
import ThreeSquareLogo from '../../assets/three-square-logo.png';
import { useNavigate } from 'react-router';

const organizations = [
    {org: 'ThreeSquare', imgSrc: ThreeSquareLogo, label: 'ThreeSquare', bgColor: 'black' },
    {org: 'ThreeSquare', imgSrc: ThreeSquareLogo, label: 'ThreeSquare', bgColor: 'red' },
    {org: 'ThreeSquare', imgSrc: ThreeSquareLogo, label: 'ThreeSquare', bgColor: 'green' },
    {org: 'ThreeSquare Knights', imgSrc: ThreeSquareLogo, label: 'ThreeSquare', bgColor: 'gold' }
];

const OrgsPage : React.FC = () => {
    let navigate = useNavigate();
    const handleTeamSelect = (org: string) => {
        console.log (`Cause Selected: ${org}`);
        navigate('/orgs/threesquare');
    }

    return (
        <>
        <div className="flex flex-col justify-center items-center w-screen-sm gap-8 h-screen">
            {/* map through the teams array with destructured variables, return a TeamButton FC
                for each element in teams.  */}
            {organizations.map(({org, imgSrc, label, bgColor}) => (
                <TeamButton 
                key = {org}
                onClick = { () => handleTeamSelect(org)}
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