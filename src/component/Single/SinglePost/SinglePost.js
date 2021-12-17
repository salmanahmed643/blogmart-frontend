import React from 'react';
import './SinglePost.css';
import single_post_img from '../../../img/post-1.jpg'

const SinglePost = () => {
    return (
        <>
            <div className="singlePostSection">
                <div className="singlePostWrapper">
                    <div className="singlePostImg">
                        <img src={single_post_img} alt="" />
                    </div>
                    <div className="singlePostInfo">
                        <span className="singlePostAuthor"> Author: <span className="authorName">Salman Ahmed</span> </span>
                        <div className="postEditDelete">
                            <i className="postEdit far fa-edit"></i>
                            <i className="postDelete far fa-trash-alt"></i>
                        </div>
                    </div>
                        <span className="singlePostDate">1 hour ago</span>

                        
                        <h3 className="singlePostTitle">Lorem ipsum dolor sit amet.</h3>
                    <div className="singlePostDesc">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. In cupiditate vel quis. Quod, nemo. Velit dolor voluptate praesentium molestias officia modi vero hic officiis possimus debitis illo consectetur quibusdam quis error blanditiis corporis ducimus quisquam expedita corrupti, dolorem eveniet. Nulla, id! Repudiandae possimus temporibus, quos ratione error incidunt. Obcaecati corrupti omnis suscipit eius voluptatem, veniam rerum architecto delectus dignissimos explicabo itaque aliquam, quidem deserunt ea reiciendis eligendi placeat quasi nobis quae optio et alias commodi sequi! Pariatur eius ex aliquam harum voluptatibus adipisci expedita vero doloribus minima beatae enim quod dicta, voluptate labore sed dignissimos reiciendis a dolore quis corrupti tenetur ea nostrum! Rerum blanditiis voluptate at eveniet numquam cumque impedit enim architecto eos repudiandae consectetur sequi odio ipsum quisquam, fugit nemo iusto animi saepe. Cumque eos minima similique qui? Fugit, pariatur atque, ipsum sint dolore eos provident error et odio quis esse temporibus ex illo ducimus eligendi eveniet! Enim, illo nam, rerum maxime illum quae laborum tempora exercitationem repellat cum nostrum necessitatibus sit natus, sequi architecto hic mollitia nulla omnis culpa expedita earum quibusdam officiis dicta. Officia, optio officiis similique harum voluptatibus eaque tenetur ad ducimus doloremque veritatis eius recusandae. Officia voluptates iure ullam, enim pariatur repellat accusantium veniam rerum excepturi magnam, sunt voluptatem temporibus soluta, voluptate eligendi quas recusandae dolorum debitis modi tempore. Impedit est rem earum, quam neque nisi quae fugiat quidem a, ullam veritatis voluptate in nulla cum nostrum? Velit facere omnis voluptate ea magni expedita deserunt voluptates quo nam fuga ipsam minus neque est illum aliquam molestias nisi in sit quod, quibusdam ullam placeat fugiat numquam quas. Consequuntur tempora ullam doloribus, officiis atque magnam suscipit harum beatae quos labore illum quod qui, distinctio perferendis quis fugiat dolores voluptatibus eligendi tempore facilis? Quae aut, consequuntur beatae quaerat cupiditate, sequi, sit in nihil dignissimos totam ut. Ea laudantium saepe soluta minima est inventore provident recusandae aspernatur. Debitis velit odit inventore amet ipsa ducimus qui quae quod, rerum asperiores quibusdam architecto at saepe soluta sed incidunt iste sapiente culpa unde, doloribus obcaecati perferendis! Minus tempore veritatis nulla recusandae dolores explicabo laboriosam necessitatibus non? Harum exercitationem veniam facilis autem qui delectus vero laboriosam consequatur dolorem maiores a expedita vitae minus esse, quo porro excepturi omnis repellendus ut quas aspernatur? Impedit aut quas sapiente eius cumque sunt, doloribus veniam vero, nesciunt illum delectus accusantium voluptatum dolores autem recusandae veritatis. Est itaque expedita tenetur placeat sit nostrum earum error quae, harum ullam recusandae laboriosam veniam ducimus totam in ea blanditiis aspernatur! Perspiciatis fuga facere eos, eveniet assumenda odit ipsum doloribus alias. Error debitis sed veniam perspiciatis quasi velit at consequuntur ipsam architecto, laborum distinctio nostrum fuga voluptate provident, facilis nisi neque corporis possimus vero laudantium quos, hic accusamus et? Dolorum non aliquam aperiam rerum minima accusamus ex possimus exercitationem dolore numquam vel, fugiat dolor consequuntur magnam, hic qui delectus consequatur, sit animi? Nulla placeat, optio a omnis alias maiores dignissimos temporibus est laborum impedit facere eligendi libero distinctio accusantium ipsa exercitationem nobis doloribus velit blanditiis nihil. Sequi, molestias! Quidem, minima illum.
                        </p>
                    </div>
                </div>
            </div> 
        </>
    );
};

export default SinglePost;