import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoWrapperComponent } from './info-wrapper.component';
import { NgxsModule, Store } from '@ngxs/store';
import { AppState } from '../../app.state';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppStateModel } from 'src/models/AppStateModel';
import { Resource } from 'src/models/Resource';
import { By } from '@angular/platform-browser';

fdescribe('InfoWrapperComponent', () => {
  let component: InfoWrapperComponent;
  let fixture: ComponentFixture<InfoWrapperComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoWrapperComponent],
      imports: [HttpClientTestingModule, NgxsModule.forRoot([AppState])],
    }).compileComponents();

    store = TestBed.inject(Store);
    fixture = TestBed.createComponent(InfoWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display initial text', () => {
    const parentDiv = fixture.debugElement.query(By.css('.info-wrapper'));
    const childDivs = parentDiv.queryAll(By.css('div'));

    expect(childDivs[0].nativeElement.textContent).toEqual(
      " Select resource and click 'Play' button to start a game. "
    );
  });

  it('should return error message', () => {
    const mockStateData: AppStateModel = {
      ...store.snapshot(),
      error: 'Error message',
    };

    store.reset(mockStateData);
    const error = store.selectSnapshot(({ error }) => error);
    expect(error).toBe('Error message');
  });

  it('should return loading as true', () => {
    const mockStateData: AppStateModel = {
      ...store.snapshot(),
      loading: true,
    };

    store.reset(mockStateData);
    const loading = store.selectSnapshot(({ loading }) => loading);
    expect(loading).toBe(true);
  });

  it('should have numbers 1 and 2 to as drawnNumbers', () => {
    const drawnNumbers = [1, 2];
    component.drawnNumbers = drawnNumbers;
    expect(component.drawnNumbers).toEqual(drawnNumbers);
  });
});
