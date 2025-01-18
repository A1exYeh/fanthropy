import TeamButton from '../../components/TeamButton';
import RaidersLogo from '../../assets/logo-raiders.svg';
import AcesLogo from '../../assets/logo-aces.svg';
import AthleticsLogo from '../../assets/logo-athletics.svg';
import GKnightsLogo from '../../assets/logo-gknights.svg';
import { useNavigate } from 'react-router';

const teams = [
  { team: 'Raiders', imgSrc: RaidersLogo, label: '', bgColor: 'black' },
  { team: 'Aces', imgSrc: AcesLogo, label: '', bgColor: 'silver' },
  {
    team: 'Athletics',
    imgSrc: AthleticsLogo,
    label: '',
    bgColor: 'green',
  },
  {
    team: 'Golden Knights',
    imgSrc: GKnightsLogo,
    label: '',
    bgColor: 'gold',
  },
];

const TeamsPage: React.FC = () => {
  let navigate = useNavigate();

  const handleTeamSelect = (team: string) => {
    console.log(`Team Selected: ${team}`);
    navigate('/orgs');
  };

  return (
    <>
      <div className='flex h-full flex-col items-center justify-center gap-8'>
        {/* map through the teams array with destructured variables, return a TeamButton FC
                for each element in teams.  */}
        {teams.map(({ team, imgSrc, label, bgColor }) => (
          <TeamButton
            key={team}
            onClick={() => handleTeamSelect(team)}
            imgSrc={imgSrc}
            label={label}
            bgColor={bgColor}
          />
        ))}
      </div>
    </>
  );
};

export default TeamsPage;
