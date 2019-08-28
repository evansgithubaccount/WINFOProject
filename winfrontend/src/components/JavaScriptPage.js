import React from 'react';
import Navigation from './Navigation';
import {Link} from 'react-router-dom';

class JavaScriptPage extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div id='javaPage'>
                <div className="row">
                    {/*<div class="col-sm-2" id="sideBar">*/}
                    <div className="col-sm-1">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link class="nav-link active" to={{pathname: '/javascript/react'}}>React</Link>
                            </li>
                            <li className="nav-item">
                                <Link class="nav-link active" to={{pathname: '/javascript/react'}}>React</Link></li>
                            <li className="nav-item">
                                <Link class="nav-link active" to={{pathname: '/javascript/react'}}>React</Link></li>
                            <li className="nav-item">
                                <Link class="nav-link active" to={{pathname: '/javascript/react'}}>React</Link></li>
                        </ul>
                    </div>
                    {/*</div>*/}
                    <div className="col-sm-9 stuff">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis tortor eu ex faucibus,
                            vitae tincidunt metus auctor. Class aptent taciti sociosqu ad litora torquent per conubia
                            nostra, per inceptos himenaeos. Curabitur ex risus, eleifend vel scelerisque et, cursus
                            vitae risus. Vivamus nec sapien ultrices, euismod purus in, elementum purus. Nam vehicula
                            euismod nunc, vitae pellentesque orci bibendum eget. Class aptent taciti sociosqu ad litora
                            torquent per conubia nostra, per inceptos himenaeos. Donec ligula sapien, eleifend et mi ut,
                            tempor feugiat nibh. Vestibulum dui erat, maximus sed ante nec, efficitur tristique lorem.
                            Duis efficitur urna lorem, vel euismod tortor bibendum nec.

                            Etiam commodo sem vitae lorem viverra pulvinar. Curabitur accumsan commodo interdum. Aenean
                            lobortis sapien bibendum, tincidunt neque eget, lacinia est. Donec non enim blandit,
                            consequat felis vel, hendrerit mauris. Cras tincidunt lacus laoreet diam varius, vel congue
                            nulla laoreet. Sed in porttitor ante. In urna massa, viverra vitae erat quis, lacinia
                            imperdiet velit. Proin pharetra, purus sit amet viverra dignissim, lectus nisl placerat
                            turpis, sed scelerisque mauris enim a lacus. Morbi vulputate est non velit fringilla, a
                            pulvinar dolor vestibulum. Ut tempus lobortis lectus vitae viverra. Ut dui neque, finibus
                            tempus vehicula sed, efficitur a ligula. Aliquam dapibus felis non enim consequat, sed
                            luctus magna consectetur. Aenean dictum velit lectus, nec maximus augue porta auctor. Nunc
                            blandit dapibus sem, vitae scelerisque urna.

                            Sed nec blandit nunc, vitae consequat massa. Nullam fermentum risus justo, consectetur
                            vulputate nisl suscipit sed. Cras ligula erat, tristique eu enim sed, imperdiet efficitur
                            neque. Nullam id ipsum nisi. Nulla ullamcorper scelerisque vehicula. Pellentesque pharetra
                            ut nibh id mollis. Praesent congue dolor porta facilisis congue. Nulla facilisi. Duis eget
                            mauris blandit arcu pretium cursus. Donec arcu nisl, bibendum et feugiat id, tempus vel
                            diam.

                            Sed facilisis libero et orci faucibus porttitor. Pellentesque sollicitudin lorem ac tellus
                            sodales fringilla. Nullam sit amet elit vulputate, ultrices nulla at, suscipit elit.
                            Praesent facilisis lorem in nulla porta consectetur. Maecenas tincidunt, lacus vitae gravida
                            eleifend, orci lectus pharetra quam, vel accumsan nibh ante ut nulla. Vivamus placerat
                            lectus vitae metus placerat, vel venenatis est commodo. Duis tristique, dolor nec
                            pellentesque euismod, erat dolor venenatis velit, in cursus lorem magna nec lacus. Phasellus
                            vulputate consectetur lorem vel porta. Fusce id orci ipsum.

                            Pellentesque sodales lacus in lacus placerat venenatis. In leo metus, facilisis et viverra
                            a, posuere non ligula. Integer at mollis sem. Nunc euismod mi id dapibus suscipit. Sed quis
                            diam molestie, rutrum elit quis, luctus urna. Cras ac lorem nec eros accumsan commodo. Ut
                            velit dolor, gravida vitae ornare at, ultricies at quam. Etiam a lectus justo. Nullam
                            lacinia euismod erat nec tempor. Vivamus suscipit mi id ultricies ornare. Duis augue nunc,
                            lobortis a lacus nec, blandit iaculis neque. Donec mollis nibh eget orci consectetur
                            maximus. Ut imperdiet diam sed ligula accumsan, ac ultricies sapien fermentum. Ut sagittis
                            mattis cursus. Proin vitae sollicitudin elit, vitae euismod erat. Phasellus porta risus
                            auctor elementum finibus.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default JavaScriptPage;