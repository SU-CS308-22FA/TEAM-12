import React, {useState, useRef} from 'react';
import { useDispatch } from 'react-redux';
import { Container, Form, Button, FormGroup, Row, Col, } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { commentPostForPos } from '../actions/comments.js';
import { commentPost } from '../actions/comments.js';
import './comment.css'

const CommentForPos = ({match,user,id}) => {

    //const [comment,setComment] = useState("");
    const [comment1,setComment1] = useState("");
    const dispatch = useDispatch(); 
    //const [comments,setComments] = useState(match.comments); 
    const [comments1,setComments1] = useState(match.comments1);
  
    return(
        <Container>
          
        <Form onSubmit={async (e)=>{
            e.preventDefault()
            const finalComment1= `${user.fullname} - ${user.favClub}: ${comment1}`
            const urlid = id
            const newComments1 = await dispatch(commentPostForPos(finalComment1, urlid))
            setComments1(newComments1)
            setComment1('')
            .then((res) => {
              console.log(res);
            })
            .catch((err)=> {
              console.log(err.response.data);                                
            })
          }}>     
          <Form.Group className="mb-3" controlId="formBasicComment">
            <Form.Label>IN ORDER TO SEE THE COMMENTS YOU NEED BE LOGGED IN AND YOU NEED TO COMMENT</Form.Label>
            <Form.Control className='form-control-lg' value={comment1} onChange={(e) => setComment1(e.target.value)} rows={4} as="textarea" placeholder="What do you think about the position?" />
          </Form.Group>
          
          {user?.fullname && (
            <Form.Group className="d-grid">
                <Button disabled={comment1===""}  type="submit" variant="secondary" size="lg">
                Post Comment
                </Button>
            </Form.Group>
          )}       
        </Form>
        <div>COMMENTS</div>
        {comments1?.map((comm)=>(
          <div class="dialogbox">
          <div class="body">
            <span class="tip tip-left"></span>
            <div class="message">
              <span>{comm}</span>
            </div>
          </div>
        </div>
        ))}
        </Container>
      );
}

export default CommentForPos