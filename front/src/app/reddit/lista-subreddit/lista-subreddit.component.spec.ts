import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSubredditComponent } from './lista-subreddit.component';

describe('ListaSubredditComponent', () => {
  let component: ListaSubredditComponent;
  let fixture: ComponentFixture<ListaSubredditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaSubredditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSubredditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
