import React from 'react';
import Navigation from './Navigation';
import {Link} from 'react-router-dom';

class JavaScriptPage extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div id='javaScriptPage'>
                <Navigation/>
        <div class="row justify-content-md-center">
        {/* <div class="col-sm-2"></div>
        <ul class="nav flex-column">
  <li class="nav-item">
    <Link class="nav-link active" to={{pathname:'/javascript/react'}}>React</Link>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Other</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Other</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Other</a>
  </li>
</ul> */}

            <div class="col-sm-8 justify-content-md-center">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor, risus quis accumsan viverra, purus ante fermentum neque, eu pharetra diam nunc ut arcu. Etiam non mollis nunc. Integer tellus lectus, fermentum sed hendrerit non, pulvinar at ante. Phasellus quis congue libero. Nullam congue velit nec fermentum interdum. Ut scelerisque feugiat odio vitae tincidunt. Proin commodo dolor at euismod aliquam. Nullam blandit molestie erat, ut accumsan erat sodales ac. Suspendisse ultricies mattis quam vitae vehicula. Vestibulum efficitur mi libero, in sollicitudin urna ultricies vitae. Aliquam rutrum lobortis tortor, sed tempor nisl tristique et. In auctor posuere mollis. Vestibulum mi tortor, ornare id justo sit amet, gravida suscipit dui.

Aliquam in sapien dui. Aliquam hendrerit at elit sed pharetra. In tincidunt aliquet neque. Maecenas vitae aliquam augue. Sed tempus non tellus ut imperdiet. Aliquam placerat ante a ipsum elementum dapibus. Etiam porttitor nisl et mi feugiat finibus. Cras posuere urna viverra lobortis tincidunt. Integer et mi placerat, elementum dolor ac, vulputate est. Praesent felis velit, placerat sed arcu vel, finibus consequat nisi. Nullam et lacus eget nunc vulputate vehicula. Proin et orci dignissim, rutrum elit id, placerat sem. Etiam ac facilisis quam. Cras mattis turpis quis imperdiet scelerisque. Nam volutpat quam auctor mauris dapibus ullamcorper.

Etiam quis elit rutrum, viverra metus tincidunt, imperdiet quam. Vestibulum sit amet magna laoreet, varius dolor quis, euismod metus. Sed id dolor turpis. Nam non sapien non erat tempus posuere. Curabitur placerat libero odio, sit amet vestibulum massa semper quis. Aenean orci eros, commodo a tincidunt id, vestibulum posuere ipsum. Sed id dignissim nisi. Morbi congue ultrices vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor sed quam a congue. In elit dui, tincidunt nec venenatis non, tempus quis leo.

Fusce posuere velit in risus porta sodales in a lorem. Pellentesque venenatis justo quis mauris pretium, sed eleifend quam feugiat. Aliquam rhoncus at leo sed malesuada. Sed a ipsum nec lectus dictum gravida. Pellentesque vestibulum ante rutrum massa viverra, eu commodo nunc feugiat. Donec suscipit vitae enim a iaculis. Duis vel urna sed est venenatis rhoncus. Vivamus laoreet, nunc sit amet sollicitudin rutrum, risus nulla mollis justo, at convallis nulla erat eget arcu. Mauris eu lorem eget purus mattis accumsan. Ut orci tortor, commodo at quam ac, fringilla scelerisque magna. Suspendisse condimentum viverra nulla, in venenatis lorem eleifend a. Pellentesque ut gravida dui. Etiam ut massa gravida, cursus ex vitae, gravida tortor. Nulla vel finibus ex. Praesent a dui finibus, lobortis massa et, fringilla nulla. Etiam ullamcorper dolor at lacus malesuada efficitur.

Nulla leo risus, venenatis eget consectetur sit amet, dapibus eget libero. Proin congue feugiat congue. Pellentesque tempus vestibulum augue efficitur porta. Morbi porttitor volutpat purus, at molestie orci. Suspendisse dictum neque id imperdiet gravida. Duis varius massa dictum euismod rutrum. Cras in orci vitae est commodo malesuada quis sed mi. Mauris eu tincidunt tellus, et faucibus ex.</p>
            </div>
</div>
</div>   
        )
    }
}

export default JavaScriptPage;