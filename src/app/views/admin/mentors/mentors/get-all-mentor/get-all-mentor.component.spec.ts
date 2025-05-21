import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllMentorComponent } from './get-all-mentor.component';

describe('GetAllMentorComponent', () => {
  let component: GetAllMentorComponent;
  let fixture: ComponentFixture<GetAllMentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllMentorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
