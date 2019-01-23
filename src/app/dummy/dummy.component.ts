import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy',
  template: `
  <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
  <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
  <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>

  <!DOCTYPE html>
<html>
<head>
<!-- <meta name="viewport" content="width=device-width, initial-scale=1"> -->

<title>Bootstrap Example</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

<style>

</style>
</head>
<body>

<!-- Side Nav hover buttons below -->

<div id="mySidenav" class="sidenav">
  <a routerLink="/login" routerLinkActive="active"  id="Home"></a>
  <a routerLink="/login" routerLinkActive="active" id="LogIn">Log In</a>
  <a href="#" id="Insurance">Insurance</a>
  <a href="#" id="projects">Projects</a>
  <a href="#" id="AboutUs">AboutUs</a>
</div>

<!-- Side Nav ends  -->

<!-- Carousel code from below  -->



<div class="heading" style="margin-left:80px;">
  <h2 align = "center"><b>Lexcorp Insurance Company</b></h2>
  <p align = "center">Make your life Stressfree and Easy</p>
</div>
</body>
</html>


    <!-- Inspired by https://codepen.io/transportedman/pen/NPWRGq -->

<div class="carousel slide carousel-fade" data-ride="carousel">

    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">
        <div class="item active">
        </div>
        <div class="item">
        </div>
        <div class="item">
        </div>
    </div>
</div>

  `,
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
