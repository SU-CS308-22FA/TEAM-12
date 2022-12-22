import React, {useState, useRef} from 'react';
import { useDispatch } from 'react-redux';
import { Container, Form, Button, FormGroup, Row, Col, } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { commentPost } from '../actions/comments.js';
import './comment.css'

const CommentSection = ({match,user,id}) => {

    const [comment,setComment] = useState("");
    const dispatch = useDispatch(); 
    const [comments,setComments] = useState(match.comments); 
  
    return(
        <Container>
          <div class="container pb-5">
          <div class="live-score-detail-head_wrapper__3MZSB bg-white py-3 py-md-5">
              <div class="text-center live-score-detail-head_date__1kxxV pb-3"> {match.date}</div>

              <div class="d-flex align-items-start justify-content-around">
                  <a class="text-decoration-none text-body d-flex flex-column align-items-center text-center col-4" >
                      <div class="live-score-detail-head_team-name__lfA8k fw-bold pt-2">{match.homeTeam}</div>
                  </a>
                  <div class="d-flex flex-column align-items-center px-4 col-4">
                      <div class="d-flex align-items-center pt-md-3 ">
                          <div class="live-score-detail-head_score__1rUZ- fw-bold px-2">{match.score}</div>
                      </div>
                      <div class="d-flex align-items-center"></div>   
                  </div>
                      <a class="text-decoration-none text-body d-flex flex-column align-items-center text-center col-4" >
                          <div class="live-score-detail-head_team-name__lfA8k fw-bold pt-2">{match.awayTeam}</div>
                      </a>
              </div>
              <div class="live-score-detail-head_bottom__3xxcF">
                    <div class="d-flex align-items-center justify-content-center mx-4">
                        <div class="d-flex align-items-center pe-3 pe-md-5">
                            <div class="ps-2 ps-md-3">
                                <div class="live-score-detail-head_whistle-name__1rOgG">{match.referee} - Current Match Rating: {match.refRating}/5</div>
                            </div>
                        </div>
                    </div>
              </div>
          </div>        
        </div>
        <Form onSubmit={async (e)=>{
            e.preventDefault()
            const finalComment= `${user.fullname} - ${user.favClub}: ${comment}`
            const urlid = id
            const newComments = await dispatch(commentPost(finalComment, urlid))
            setComments(newComments)
            setComment('')
            .then((res) => {
              console.log(res);
            })
            .catch((err)=> {
              console.log(err.response.data);                                
            })
          }}>     
          <Form.Group className="mb-3" controlId="formBasicComment">
            <Form.Label>IN ORDER TO SEE THE COMMENTS YOU NEED BE LOGGED IN AND YOU NEED TO COMMENT</Form.Label>
            <Form.Control className='form-control-lg' value={comment} onChange={(e) => setComment(e.target.value)} rows={4} as="textarea" placeholder="What do you think about the referee's performance?" />
          </Form.Group>
          
          {user?.fullname && (
            <Form.Group className="d-grid">
                <Button disabled={comment===""}  type="submit" variant="secondary" size="lg">
                Post Comment
                </Button>
            </Form.Group>
          )}       
        </Form>
        <div>COMMENTS</div>
        {comments?.map((comm)=>(
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

export default CommentSection