import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllBlogComponent } from './get-all-blog.component';

describe('GetAllBlogComponent', () => {
  let component: GetAllBlogComponent;
  let fixture: ComponentFixture<GetAllBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllBlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
