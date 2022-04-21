import React from 'react'
import("./Project.css")

export default function Project(project) {
  return (
    <div>
        <h2>{ project.title }</h2>
        <p>{ project.summary }</p>
        <p><a href="{project.lien_github}" target="_blank">Lien github</a></p>
        <p>{ project.content }</p>
    </div>
  )
}
