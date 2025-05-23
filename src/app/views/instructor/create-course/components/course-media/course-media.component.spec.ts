import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CourseMediaComponent } from './course-media.component'

describe('CourseMediaComponent', () => {
  let component: CourseMediaComponent
  let fixture: ComponentFixture<CourseMediaComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseMediaComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(CourseMediaComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
