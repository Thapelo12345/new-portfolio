import projects from "../projectList.js";

var projectContainer, projectTitle, projectImage, projectButton, archor;

projects.forEach((item)=>{
 
     projectContainer = document.createElement('div')
    $(projectContainer).addClass('project-container')
    $(projectContainer).prop('id', item.projectId)
    $(projectContainer).appendTo($("#projects-holder"))

    /*
    projectTitle = document.createElement('h2')
    $(projectTitle).addClass('project-title')
    $(projectTitle).text(item.title.toUpperCase())
    // $(projectTitle).appendTo($(projectContainer))
*/
    projectImage = document.createElement('img')
    $(projectImage).attr('src', item.picUrl)
    $(projectImage).addClass('project-images')
    $(projectImage).appendTo($(projectContainer))

    projectButton = document.createElement('button')
    $(projectButton).addClass("view-more-buttons")
    $(projectButton).appendTo($(projectContainer))

    archor = document.createElement('a')
    $(archor).attr('href', item.link)
    $(archor).attr('target', '_blank')
    $(archor).text('Link')
    $(archor).addClass('project-links')
    $(archor).appendTo($(projectButton))
    
})//end of each


$('.project-container').hover(
    function () {

let elementId = $(this).attr('id')
let elmentPos = projects.map(item=> item.projectId).indexOf(Number(elementId))

projectTitle = document.createElement('h2')
    $(projectTitle).addClass('project-title')
    $(projectTitle).text(projects[elmentPos].title.toUpperCase())
    $(projectTitle).appendTo($('#project-description'))

let para = document.createElement('p')
$(para).text(projects[elmentPos].pargraph)
$(para).addClass('paragraphs')
$(para).appendTo($('#project-description'))
        
    }, function () {
        $('#project-description').empty()
    }
);
