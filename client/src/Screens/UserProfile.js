import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { toast } from 'react-toastify'

export const UserProfile = ({ user }) => {
    
    var filteredComments = [ ]; 

    const [newuser, setUser] = useState({
        email: "",
    })
    
    const [comments, setComments] = useState(filteredComments);

    const [imageUrl, setImageUrl] = useState('');
    
        /**
     * This function is called when the "Update User" button is clicked. 
     * It shows successfully changed message if user decide to take available mail and updates his/her credential. This function has a communication with db. 
     */
    const userUpdate = () => {
        axios.put('http://localhost:5000/users/edit/'+user._id, newuser)
        .then((user) => console.log(user))
        let message = " Updated Successfully";         
            toast("✔️"+message,
                {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });    
    }
        /**
     * This function is called when the "Delete User" button is clicked. 
     * It shows successfully deleted message if user decide to delete his/her account. This function has a communication with db. 
     */
    const userDelete = () => {
        axios.delete('http://localhost:5000/users/edit/'+user._id)
        .then((res) => console.log(res.status))
        let message = " Deleted Successfully";         
        toast("✔️"+message,
            {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });   
    }


      useEffect(() => {
        const profilePictures = [
          'https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1672693971~exp=1672694571~hmac=912fa3da1e8b606bccb29e6592bc03ed5a52e6c62e680ea200fed872d1969528',
          'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1672694005~exp=1672694605~hmac=230d7c49de31197cde0af38ed87d398da60da71c4a640731d9782b147517ec27,',
          'https://img.freepik.com/free-vector/mysterious-mafia-man-wearing-hat_52683-34829.jpg?w=740&t=st=1672694027~exp=1672694627~hmac=19bf16df5d2c260c73181a34518229da3e6f5b4c1650872648b43997b5a1ee8e',
        'https://img.freepik.com/free-vector/mysterious-gangster-mafia-character-smoking_23-2148474614.jpg?w=740&t=st=1672694077~exp=1672694677~hmac=dc1c8a245df306a2c4903081d12754c4e83b315bde599291cd359018dc391db3',
        'https://img.freepik.com/free-photo/3d-rendering-zoom-call-avatar_23-2149556785.jpg?w=900&t=st=1672694093~exp=1672694693~hmac=c934daacaaddfd8089cc658125fc69b23a5ab38b413664d80bcfe270cb8f242c',
        'https://img.freepik.com/free-photo/3d-rendering-zoom-call-avatar_23-2149556776.jpg?w=900&t=st=1672694103~exp=1672694703~hmac=ca530e2d94e12c7f1255809d6affd79994240dd228b7d55f83970bb6e2817de4',
        'https://img.freepik.com/free-photo/3d-rendering-zoom-call-avatar_23-2149556782.jpg?w=900&t=st=1672694116~exp=1672694716~hmac=d9d4d2a47757dbf37a654bd6349461e1af6914db9462076ebc5b1670cfda8c20',
        'https://img.freepik.com/free-vector/flat-illustration-person-shrugging_23-2149330509.jpg?w=740&t=st=1672694133~exp=1672694733~hmac=d91b28fa4b516aab932b3a7905d19f559876dbce552cf768409917526f2ce5e9',
        'https://img.freepik.com/free-psd/business-man-illustration_1150-58986.jpg?w=996&t=st=1672694144~exp=1672694744~hmac=ed82eedb2296c48fff84c465cd02eadbf0ddf915145fc076d9307107d22f922b',
        'https://img.freepik.com/free-vector/modern-people-avatar-casual-clothes-vector-cartoon-illustration-man-with-individual-face-hair-light-digital-frame-dark-blue-computer-picture-web-profile_107791-4246.jpg?w=996&t=st=1672694190~exp=1672694790~hmac=9ace3f8a07d9760db55eeefb2c40a4c452de2e24a5a0a372877ca53af8bce975',
        'https://img.freepik.com/free-photo/3d-rendering-zoom-call-avatar_23-2149556778.jpg?w=900&t=st=1672694227~exp=1672694827~hmac=b0294b6269d45743993acd9b53cf858557d2565f04c3e2868532df2315ea0df1',
        ];
        setImageUrl(profilePictures[Math.floor(Math.random() * profilePictures.length)]);
      }, []);
      

        
        /*const getUserComments = () => {
            axios.get(`${process.env.REACT_APP_API_URL}/matches/all/${user?.fullname}`)
            .then(response =>
                response.data.forEach(match => {
                    var filteredMatch = match.comments.filter(comment => comment.includes(user?.fullname));

                    filteredComments = filteredComments.concat(filteredMatch);
                    
                    console.log(filteredComments);
                })
        )
    }*/

    //getUserComments();

    useEffect(() => {
        // Fetch the comments and update the state
        axios.get(`${process.env.REACT_APP_API_URL}/matches/all/${user?.fullname}`)
          .then(response => {
            const filteredComments = response.data.map(match => {
              return match.comments.filter(comment => comment.includes(user?.fullname));
            });
            const flattenComments = filteredComments.flat();
            setComments(flattenComments);
          });
      }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser(oldUser => {
            return {
                ...oldUser,
                [name]: value
            }
        })
    }
    return(
    <div>   
        <div class='parent'>
            <div class ='col d-flex justify-content-center'>
                <div class='child'>
                <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={imageUrl} />
  </Card>
                </div>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Full Name</th>
                    <th>Favorite Club</th>
                    <th>Favorite Referee</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>{user?.fullname}</td>
                    <td>{user?.favClub}</td>
                    <td>{user?.favRef}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
        <div class = 'parent'>
            <div class ='col d-flex justify-content-center'>
                <div class = 'child'>
                    <label>Email: &nbsp;</label> 
                    <input type="text" name="email" value={newuser.email} required onChange={handleChange}/><br/>
                    <div class = 'child'>
                        <div class = 'col d-flex justify-content-center'>
                        <h1><Button style = {{ width: "7rem" }} variant="light" className='btn btn-warning' onClick={userUpdate}>Update User</Button>
                    </h1>&nbsp;&nbsp;&nbsp;<h1>
                    <Button style = {{ width: "7rem"} } variant="dark" className='btn btn-danger' onClick={userDelete}>Delete User</Button>
                    </h1>
                    </div>
                        </div>
                    </div>
                    <Table striped bordered hover>
  <thead>
    <tr>
      <th>Comments</th>
    </tr>
  </thead>
  <tbody>
  {comments.map(comment => (
  <tr key={comment}>
    <td><strong>{comment}</strong></td>
  </tr>
))}

  </tbody>
</Table>

                        </div>
                    </div>
                </div>
  ) 
  
};


export default UserProfile;
