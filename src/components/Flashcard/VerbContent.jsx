import React from "react";

const VerbContent = ({word}) => (
  <>
    <table>
      <thead className={word.type}>
        <tr>
          <th scope="col">Polite Forms</th>
        </tr>
      </thead>
      <tr>
        <td scope="row">
          <span>3</span>
          {word.forms.long_past_form || word.forms.past_affirmative}
        </td>
        <td>
          <span>1</span>
          <strong>{word.long_form || word.forms.present_affirmative}</strong>
        </td>
      </tr>
      <tr>
        <td scope="row">
          <span>4</span>
          {word.forms.long_past_negative_form || word.forms.past_negative} 
        </td>
        <td>
          <span>2</span>
          {word.forms.long_nai_form || word.forms.present_negative}</td>
      </tr>
      {word.forms.volitional_form &&
        <tr>
          <td scope="row">
            <span>5</span>
            {word.forms.long_volitional_form}
          </td>
        </tr>
      }
      <thead className={word.type}>
        <tr>
          <th scope="col">Plain Forms</th>
        </tr>
      </thead>
      <tr>
        <td scope="row">
          <span>3</span>
          {word.forms.past_form || word.forms.short_past_affirmative}
        </td>
        <td>
          <span>1</span>
          <strong>{word.plain_form || word.forms.short_present_affirmative}</strong>
        </td>
      </tr>
      <tr>
        <td scope="row">
          <span>4</span>
          {word.forms.past_negative_form || word.forms.short_past_negative}
        </td>
        <td>
          <span>2</span>
          {word.forms.nai_form || word.forms.short_present_negative}</td>
      </tr>
      {word.forms.volitional_form &&
        <tr>
          <td scope="row">
            <span>5</span>
            {word.forms.volitional_form}
          </td>
        </tr>
      }
      
      {/* <thead className={word.type}>
        <tr>
          <th scope="col">Conditionals</th>
        </tr>
      </thead>
      <tr>
        <td scope="row">
          <span>7</span>
          {word.forms.nakereba_form}
        </td>
        <td>
          <span>6</span>
          {word.forms.eba_form}
        </td>
      </tr>
      <thead className={word.type}>
        <tr>
          <th scope="col">Te / De</th>
        </tr>
      </thead>
      <tr>
        <td>
          <span>9</span>
          {word.forms.de_form}
        </td>
        <td scope="row">
          <span>8</span>
          {word.forms.te_form}
        </td>
      </tr> */}
      {/* <thead className={word.type}>
        <tr>
          <th scope="col">Tai</th>
        </tr>
      </thead>
      <tr>
        <td scope="row">
          <span>8</span>
          {word.forms.takunai_form}
        </td>
        <td scope="row">
          <span>10</span>
          {word.forms.tai_form}
        </td>
        
      </tr> */}
      {/* <thead className={word.type}>
        <tr>
          <th scope="col">Potential</th>
        </tr>
      </thead>
      <tr>
        <td scope="row">
          <span>10</span>
          {word.forms.potential_form}
        </td>
      </tr> */}
    </table>
  </>
);

export default VerbContent;
