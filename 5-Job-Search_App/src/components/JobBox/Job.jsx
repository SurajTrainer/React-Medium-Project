import React from 'react'
import style from './Job.module.css'

const data = [{
  id: 1,
  title: ' Frontend Dev',
  post: 12,
  experience: 'intermediate',
  des: 'Web development refers to the creating, building, and maintaining of websites. .'
},
{
  id: 2,
  title: ' Backend Dev',
  post: 4,
  experience: 'advance',
  des: 'Web development refers to the creating, building, and maintaining of websites. .'
},{
  id: 2,
  title: ' Backend Dev',
  post: 4,
  experience: 'advance',
  des: 'Web development refers to the creating, building, and maintaining of websites. .'
},
{
  id: 2,
  title: ' Backend Dev',
  post: 4,
  experience: 'advance',
  des: 'Web development refers to the creating, building, and maintaining of websites. .'
},
{
  id: 2,
  title: ' Backend Dev',
  post: 4,
  experience: 'advance',
  des: 'Web development refers to the creating, building, and maintaining of websites. .'
},
{
  id: 2,
  title: ' Backend Dev',
  post: 4,
  experience: 'advance',
  des: 'Web development refers to the creating, building, and maintaining of websites. .'
},
{
  id: 2,
  title: ' Backend Dev',
  post: 4,
  experience: 'advance',
  des: 'Web development refers to the creating, building, and maintaining of websites. .'
},
]  
const Job = () => {

  return (

    <div className={style.jobContainer}>

      {data.map(({ id, title, post, experience, des }) => {
        return (
        <div key={id} className={style.bodydiv} role="document">
          <div className={`modal-content rounded-4 shadow ${style.divpadding}`}>
            <div className="modal-header border-bottom-0">{id + '. '}
              <h1 className="modal-title fs-5">{title}</h1> 
              
            </div>
            <div className="modal-body py-0">
             {des}
            </div>
            <div>{ 'experience ' + experience}</div>
            <div className="modal-footer flex w-10 gap-2 pb-3 border-top-0">{'posts  :  '+ post}
              <button type="button" className="btn btn-success">Apply Job</button>
            </div>
          </div>
        </div>
        )

      })}


    </div>
  )
}

export default Job
