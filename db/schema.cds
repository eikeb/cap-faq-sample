using { sap, managed } from '@sap/cds/common';

namespace sample.faq;

entity Categories : sap.common.CodeList {
  key ID    : Integer;
  parent    : Association to Categories;
  children  : Composition of many Categories on children.parent = $self;
  questions : Association to many Questions on questions.category = $self;
}

entity Questions : managed {
  key ID    : Integer;
  category  : Association to Categories;
  question  : localized String(256);
  answer    : localized LargeString;
  released  : Boolean;
}