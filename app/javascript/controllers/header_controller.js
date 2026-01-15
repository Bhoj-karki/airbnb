import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets=['openUserBars']

  connect () {
    
    this.openUserBarsTarget.addEventListener("click",(e)=>{
    console.log("header clicked")
    })
  }
}