import { ReplySvg } from "@/components/svg";
import Image from "next/image";

const blogCommentData = [
   {
      id: 1,
      avatar: "/assets/img/blog/blog-details/user.png",
      name: "Chigusa Kisa",
      date: "July 21, 2020 at 7:22 pm",
      text: "I love the way the instructor goes about the course. So easy to follow, even though a \n little bit challenging as expected.",
      replies: [
         {
            id: 11,
            avatar: "/assets/img/blog/blog-details/user2.png",
            name: "Nicolas Bryant",
            date: "July 21, 2020 at 7:22 pm",
            text: "I love the way the instructor goes about the course. So easy to follow, even though a little bit challenging as expected.",
         },
      ],
   },
];


export default function PostboxCommentArea() {
   return (
      <div className="tp-postbox-comment-wrapper mb-75">
         <div className="tp-postbox-comment">
            <h2 className="tp-postbox-comment-title-2 mb-35">
               {blogCommentData.length} Comments
            </h2>
            <ul>
               {blogCommentData.map((comment) => (
                  <li key={comment.id}>
                     <div className="tp-postbox-comment-box tp-postbox-comment-box-2">
                        <div className="tp-postbox-comment-info mr-20">
                           <div className="tp-postbox-comment-avater">
                              <Image src={comment.avatar} alt={comment.name} width={50} height={50} />
                           </div>
                        </div>
                        <div className="tp-postbox-comment-text">
                           <div className="tp-postbox-comment-name mb-15">
                              <h6 className="tp-postbox-comment-title">
                                 <a href="#">{comment.name}</a>
                              </h6>
                              <span className="tp-post-meta">{comment.date}</span>
                           </div>
                           <p className="white-space">{comment.text}</p>
                           <div className="tp-postbox-comment-reply">
                              <a href="#">
                                 <ReplySvg />
                                 Reply
                              </a>
                           </div>
                        </div>
                     </div>
                     {/* Render Replies */}
                     {comment.replies && comment.replies.length > 0 && (
                        <ul className="children">
                           {comment.replies.map((reply) => (
                              <li key={reply.id}>
                                 <div className="tp-postbox-comment-box tp-postbox-comment-box-2">
                                    <div className="tp-postbox-comment-info mr-20">
                                       <div className="tp-postbox-comment-avater">
                                          <Image src={reply.avatar} alt={reply.name} width={50} height={50} />
                                       </div>
                                    </div>
                                    <div className="tp-postbox-comment-text">
                                       <div className="tp-postbox-comment-name mb-15">
                                          <h6 className="tp-postbox-comment-title">
                                             <a href="#">{reply.name}</a>
                                          </h6>
                                          <span className="tp-post-meta">{reply.date}</span>
                                       </div>
                                       <p>{reply.text}</p>
                                       <div className="tp-postbox-comment-reply">
                                          <a href="#">
                                             <ReplySvg />
                                             Reply
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                              </li>
                           ))}
                        </ul>
                     )}
                  </li>
               ))}
            </ul>
         </div>
      </div>

   );
}