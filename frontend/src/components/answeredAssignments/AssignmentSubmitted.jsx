import React, {useState,useEffect} from "react";
import AnsweredAssignmentsApi from '../../api/AnsweredAssignmentsApi';
import AssignmentsApi from '../../api/AssignmentsApi';
import AccordianForAssignment from '../accordian/AccordianForAssignment';


  

function AssignmentSubmitted() {
    
    const[questions,setQuestions] = useState([]);
    const[answers,setAnswers] = useState([]);
    
    const getAnsweredAssignmentById = (id) => {
        console.log("Calling getAssignmentById " + id )
        AnsweredAssignmentsApi.getAnsweredAssignmenttByAssignmentId(id)
            .then(response => {
                
                setAnswers(response.data);
                
                
                console.log("Data from answered table" + response.data);
            })
    }

    const getQuestionsAssignmentById = (id) => {
        console.log("Calling getAssignmentById " + id )
        AssignmentsApi.getAssignmentById(id)
            .then(response => {
                
                setQuestions(response.data);
                
                
                console.log("Data from questions table " + response.data);
            })
    }

    useEffect(() => {
        
        getAnsweredAssignmentById(1); // hardcoding it now , future changes needed
        getQuestionsAssignmentById(1); // hardcoding it now , future changes needed

    
    },[] );


    
    return (
        <div>
         <AccordianForAssignment questions={questions} answers={answers}/>
        </div>  
      );}
export default AssignmentSubmitted;