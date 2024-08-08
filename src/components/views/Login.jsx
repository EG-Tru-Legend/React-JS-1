import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/useAuth.jsx';
import Action from '../UI/Actions.jsx';

function Login() {
  // Initialisation ----------------------------------------------------
  const {login} = useAuth();
  const navigate = useNavigate();

  const student = {
    UserID: 276,
    UserFirstname: "Hashim",
    UserLastname: "ABDALLAH",
    UserEmail: "K1083353@kingtson.ac.uk",
    UserRegistered: 0,
    UserLevel: 4,
    UserYearID: 1,
    UserUserTypeID: 2,
    UserImageURL: "https://images.generated.photos/evdpMs0ZUOoMA0ACfCy98zzmy347YQxRmrPCWHp3v0g/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzUzMTEyLmpwZw.jpg",
    UserUsertypeName: "Student",
    UserYearName: "2022-23"
  };

  const staff = {
    UserID: 820,
    UserFirstname: "Graeme",
    UserLastname: "Jones",
    UserEmail: "Ku06696@kingtson.ac.uk",
    UserRegistered: 1,
    UserLevel: 0,
    UserYearID: null,
    UserUserTypeID: 1,
    UserImageURL: "https://images.generated.photos/evdpMs0ZUOoMA0ACfCy98zzmy347YQxRmrPCWHp3v0g/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzUzMTEyLmpwZw.jpg",
    UserUsertypeName: "Staff",
    UserYearName: null
  };

  // State -------------------------------------------------------------
  // Handlers ----------------------------------------------------------
  const handleStudent = () => {
    login(student);
    navigate("/");
  };

  const handleStaff = () => {
    login(staff);
    navigate("/");
  };

  // View --------------------------------------------------------------
    return (
        <Action.Tray>
            <Action.Add showText buttonText="Login as student" onClick={handleStudent} />
            <Action.Add showText buttonText="Login as staff" onClick={handleStaff} />
        </Action.Tray>
    );
}

export default Login;