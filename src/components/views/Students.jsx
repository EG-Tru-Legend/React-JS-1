import { CardContainer, Card } from '../UI/Card.jsx';
import './Students.scss';

function Students() {
    const studentlist = [
        {"UserID": 275, "UserFirstname": "Sholeh","UserLastname": "ABBAS", "UserEmail": "K2955214@kingston.ac.uk", "UserRegistered":0, "UserLevel": 4, "UserYearID": 1, "UserUserTypeID": 2, "UserImageURL":"https://images.generated.photos/evdpMs0ZUOoMA0ACfCy98zzmy347YQxRmrPCWHp3v0g/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzUzMTEyLmpwZw.jpg"},
        {"UserID": 276, "UserFirstname": "Hashim","UserLastname": "ABDALLAH", "UserEmail": "K1083353@kingston.ac.uk", "UserRegistered":0, "UserLevel": 4, "UserYearID": 1, "UserUserTypeID": 2, "UserImageURL":"https://images.generated.photots/evdpMsOZUOoMAOACFCy98zzmy34"},
        {"UserID": 277, "UserFirstname": "Ahmad","UserLastname": "ABDUL KABEER", "UserEmail": "K2290629@kingston.ac.uk", "UserRegistered":0, "UserLevel": 4, "UserYearID": 1, "UserUserTypeID": 2, "UserImageURL":"https://images.generated.photots/evdpMsOZUOoMAOACFCy98zzmy34"},
        {"UserID": 278, "UserFirstname": "Suheyb","UserLastname": "ABDULQADIR", "UserEmail": "K9536850@kingston.ac.uk", "UserRegistered":0, "UserLevel": 4, "UserYearID": 1, "UserUserTypeID": 2, "UserImageURL":"https://images.generated.photots/evdpMsOZUOoMAOACFCy98zzmy34"},
        {"UserID": 279, "UserFirstname": "Ezubair","UserLastname": "ABRAHAM", "UserEmail": "K5638915@kingston.ac.uk", "UserRegistered":0, "UserLevel": 4, "UserYearID": 1, "UserUserTypeID": 2, "UserImageURL":"https://images.generated.photots/evdpMsOZUOoMAOACFCy98zzmy34"},
        {"UserID": 280, "UserFirstname": "Hisham","UserLastname": "ABUBAKAR", "UserEmail": "K1035263@kingston.ac.uk", "UserRegistered":0, "UserLevel": 4, "UserYearID": 1, "UserUserTypeID": 2, "UserImageURL":"https://images.generated.photots/evdpMsOZUOoMAOACFCy98zzmy34"},
        {"UserID": 281, "UserFirstname": "Mahmaud","UserLastname": "ADEN", "UserEmail": "K2866646@kingston.ac.uk", "UserRegistered":0, "UserLevel": 4, "UserYearID": 1, "UserUserTypeID": 2, "UserImageURL":"https://images.generated.photots/evdpMsOZUOoMAOACFCy98zzmy34"},
        {"UserID": 282, "UserFirstname": "Isaac","UserLastname": "AFRAZEH", "UserEmail": "K7727337@kingston.ac.uk", "UserRegistered":0, "UserLevel": 4, "UserYearID": 1, "UserUserTypeID": 2, "UserImageURL":"https://images.generated.photots/evdpMsOZUOoMAOACFCy98zzmy34"},
        {"UserID": 283, "UserFirstname": "Danish","UserLastname": "AHMAD", "UserEmail": "K3009749@kingston.ac.uk", "UserRegistered":0, "UserLevel": 4, "UserYearID": 1, "UserUserTypeID": 2, "UserImageURL":"https://images.generated.photots/evdpMsOZUOoMAOACFCy98zzmy34"},
        {"UserID": 284, "UserFirstname": "Shuja","UserLastname": "AHMAD", "UserEmail": "K8319360@kingston.ac.uk", "UserRegistered":0, "UserLevel": 4, "UserYearID": 1, "UserUserTypeID": 2, "UserImageURL":"https://images.generated.photots/evdpMsOZUOoMAOACFCy98zzmy34"}
      ];
    return (
        <>
        <h1>Students</h1>
        <CardContainer>
            {
            studentlist.map((student)=>{
                return(
                <div className='studentCard'key={student.UserEmail}>
                <Card>
                    <p>{student.UserEmail.substring(0,8)}</p>
                    <p>{`${student.UserFirstname} ${student.UserLastname}`}</p>
                    <img src={student.UserImageURL} />
                </Card>
                </div>
                )
            })
            }
        </CardContainer>
        </>
    );
}

export default Students;