/**
 * Created by Jeff on 2016/12/21.
 */
$("<li class='titleLi' id='1'>Hello</li>").appendTo(".titleUl");
$("<li class='titleLi' id='2'>Hello</li>").appendTo(".titleUl");
$("<li class='titleLi' id='3'>Hello</li>").appendTo(".titleUl");
$("<li class='titleLi selLi' id='4'>Hello</li>").appendTo(".titleUl");
$("<li class='titleLi' id='5'>Hello</li>").appendTo(".titleUl");

var h = $("#mainTable");
h.append("<tr><th>hello</th><th>hello</th><th><button class='btn addBtn'>Add</button></th></tr>");
h.append("<tr><td>hello</td><td>hello</td><td><button class='btn manBtn'>MANAGE</button></td></tr>");
h.append("<tr><td>hello</td><td>hello</td><td><button class='btn manBtn'>MANAGE</button></td></tr>");
h.append("<tr><td>hello</td><td>hello</td><td><button class='btn manBtn'>MANAGE</button></td></tr>");
