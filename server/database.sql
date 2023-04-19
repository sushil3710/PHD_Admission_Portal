-- Active: 1680711743255@@127.0.0.1@5432@mtech
CREATE TABLE signup_verification (
    email_id TEXT PRIMARY KEY,
    hashed_otp TEXT,
    expiration_time TIMESTAMP
);


CREATE TABLE forgot_password_verification (
    email_id TEXT PRIMARY KEY,
    hashed_otp TEXT,
    expiration_time TIMESTAMP
);

CREATE TABLE login_verification (
    email_id TEXT PRIMARY KEY,
    hashed_otp TEXT,
    expiration_time TIMESTAMP
);

CREATE TABLE applicants (
    -- Primary Keys
    email_id TEXT PRIMARY KEY,
    passwd TEXT,
    applicant_id SERIAL,

    -- Personal Details
    full_name TEXT,
    guardian TEXT,
    fathers_name TEXT,
    profile_image_url TEXT,
    date_of_birth TEXT,
    aadhar_card_number TEXT,
    category TEXT,
    category_certificate_url TEXT,
    is_pwd TEXT,
    pwd_type TEXT,
    pwd_url TEXT,
    blood_group TEXT,
    marital_status TEXT,
    spouse_name TEXT,
    spouse_occupation TEXT,
    nationality TEXT,
    gender TEXT,
    advertisement TEXT,

    -- Communication Details
    communication_address TEXT,
    communication_city TEXT,
    communication_state TEXT,
    communication_pincode TEXT,

    permanent_address TEXT,
    permanent_city TEXT,
    permanent_state TEXT,
    permanent_pincode TEXT,

    mobile_number TEXT,
    alternate_mobile_number TEXT,

    -- Educational Details
    degree_10th TEXT,
    board_10th TEXT,
    percentage_cgpa_format_10th TEXT,
    percentage_cgpa_value_10th TEXT,
    year_of_passing_10th TEXT,
    remarks_10th TEXT,
    marksheet_10th_url TEXT,

    degree_12th TEXT,
    board_12th TEXT,
    percentage_cgpa_format_12th TEXT,
    percentage_cgpa_value_12th TEXT,
    year_of_passing_12th TEXT,
    remarks_12th TEXT,
    marksheet_12th_url TEXT,

    degrees TEXT[][],

    other_remarks TEXT,
    is_last_degree_completed TEXT
);

CREATE TABLE admins(
  name TEXT, 
  email_id TEXT PRIMARY KEY,
  passwd TEXT,
  admin_type INT NOT NULL,
  department TEXT[]
);
CREATE TABLE excels(
  name TEXT, 
  file_url TEXT
);
-- 0 for super-admin, 1 for faculty-admins, 2 for applicant, 3 for Staff

CREATE OR REPLACE FUNCTION insert_into_login_verification()
  RETURNS TRIGGER 
  LANGUAGE PLPGSQL
  AS
$$
BEGIN
    INSERT INTO login_verification(email_id) VALUES(new.email_id);
	RETURN NEW;
END;
$$;

CREATE TRIGGER trigger_insert_into_admins
  AFTER INSERT
  ON admins
  FOR EACH ROW
  EXECUTE PROCEDURE insert_into_login_verification();

CREATE TRIGGER trigger_insert_into_applicants
  AFTER INSERT
  ON applicants
  FOR EACH ROW
  EXECUTE PROCEDURE insert_into_login_verification();

CREATE TABLE current_cycle(
  cycle_id INT PRIMARY KEY NOT NULL
);

CREATE TABLE admission_cycles(
  cycle_id SERIAL PRIMARY KEY,
  NAME TEXT,
  duration_start TEXT,
  duration_end TEXT,
  fees_gen TEXT,
  fees_ews TEXT,
  fees_obc TEXT,
  fees_sc TEXT,
  fees_st TEXT,
  fees_pwd TEXT,
  brochure_url TEXT,
  rank_list_url TEXT
);

CREATE TABLE deleted_admission_cycles(
  cycle_id INT PRIMARY KEY,
  NAME TEXT,
  duration_start TEXT,
  duration_end TEXT,
  fees_gen TEXT,
  fees_ews TEXT,
  fees_obc TEXT,
  fees_sc TEXT,
  fees_st TEXT,
  fees_pwd TEXT,
  brochure_url TEXT,
  rank_list_url TEXT
);

CREATE OR REPLACE FUNCTION insert_into_deleted_admission_cycles()
  RETURNS TRIGGER 
  LANGUAGE PLPGSQL
  AS
$$
BEGIN
  INSERT INTO deleted_admission_cycles VALUES(OLD.cycle_id, OLD.NAME, OLD.duration_start, OLD.duration_end, OLD.fees_gen, OLD.fees_ews, OLD.fees_obc, OLD.fees_sc, OLD.fees_st, OLD.fees_pwd, OLD.brochure_url, OLD.rank_list_url);
  RETURN OLD;
END;
$$;

CREATE TRIGGER trigger_delete_from_admission_cycles
  AFTER DELETE
  ON admission_cycles
  FOR EACH ROW
  EXECUTE PROCEDURE insert_into_deleted_admission_cycles();

-- Type = 'application' || 'offering' || 'admin'
CREATE TABLE templates (
  template_id SERIAL PRIMARY KEY,
  email_id TEXT,
  name TEXT,
  type TEXT,
  column_list TEXT[],
  column_list_compact TEXT[]
);

-- PERMANENT INSERT
INSERT INTO TEMPLATES(email_id,name,type,column_list,column_list_compact) VALUES('default@template', 'REGULAR ', 'APPLICANT LIST', ARRAY[ 'application_id', 'applying_for', 'mode_of_app','full_name','guardian', 'fathers_name', 'profile_image_url', 'date_of_birth', 'aadhar_card_number',
'category', 'is_pwd','pwd_type','blood_group', 'marital_status','spouse_name','spouse_occupation', 'nationality', 'category_certificate_url','pwd_url','gender','advertisement', 'communication_address', 'communication_city','communication_state', 'communication_pincode', 'permanent_address', 'permanent_city', 'permanent_state',
'permanent_pincode', 'mobile_number', 'alternate_mobile_number', 'email_id', 'degree_10th', 'board_10th', 'percentage_cgpa_format_10th','percentage_cgpa_value_10th',
'year_of_passing_10th', 'remarks_10th', 'marksheet_10th_url', 'degree_12th', 'board_12th', 'percentage_cgpa_format_12th', 'percentage_cgpa_value_12th',
'year_of_passing_12th', 'remarks_12th', 'marksheet_12th_url', 'degrees', 'other_remarks', 'is_last_degree_completed','transaction_id',
'interdisciplinary_prog_check' ,'interdisciplinary_prog_name','area_of_research','first_pref','second_pref','third_pref','fourth_pref','specific_research_area','noc_pdf','sop_pdf',
'qualifying_examination_1', 'branch_code_1', 'year_1','valid_upto_1', 'all_india_rank_1', 'score_1' 
,'qualifying_examination_2', 'branch_code_2', 'year_2','valid_upto_2', 'all_india_rank_2', 'score_2'
,'qualifying_examination_3', 'branch_code_3', 'year_3','valid_upto_3', 'all_india_rank_3', 'score_3','exam_result_pdf', 
'signature_url','date_of_declaration', 'place_of_declaration','pi_project_number',
'name_of_working_org_1','designation_1','duration_post_start_1','duration_post_end_1','nature_of_work_1',
'name_of_working_org_1','designation_1','duration_post_start_1','duration_post_end_1','nature_of_work_1',
'total_years_of_service ','publications_pdf'], 
ARRAY['Application ID','Full Name','Father''s Name','Email Address','Profile Image','Date of Birth','Aadhar Card Number','Category','Category Certificate','Belongs to PWD','Marital Status','Nationality','Gender','Communication Address','Permanent Address','Mobile Number','Alternate Mobile Number','Educational Details: 10th',
'Educational Details: 12th','Educational Details: College','Educational Remarks','Last Degree Completion Status','Qualifying Exmaination','Branch Code','GATE Examination Year','GATE Enrollment Number',
'COAP Registration Number','All India Rank','GATE Score','Valid Upto','Self Attested Copies of GATE','Qualifying Exam Remarks','Amount','Transaction ID','Bank','Transaction Slip','Date of Transaction','Signature','Date of Declaration','Place of Declaration','Status','Status Remarks','is_sponsored_applicant','name_of_sponsoring_org','name_of_working_org','address_of_org','designation','post_type','duration_post_start','duration_post_end','years_of_service']);

INSERT INTO TEMPLATES(email_id,name,type,column_list,column_list_compact) VALUES('default@template', 'EXTERNAL ', 'APPLICANT LIST', ARRAY[ 'application_id', 'applying_for', 'mode_of_app','full_name','guardian', 'fathers_name', 'profile_image_url', 'date_of_birth', 'aadhar_card_number',
'category', 'is_pwd','pwd_type','blood_group', 'marital_status','spouse_name','spouse_occupation', 'nationality', 'category_certificate_url','pwd_url','gender','advertisement', 'communication_address', 'communication_city','communication_state', 'communication_pincode', 'permanent_address', 'permanent_city', 'permanent_state',
'permanent_pincode', 'mobile_number', 'alternate_mobile_number', 'email_id', 'degree_10th', 'board_10th', 'percentage_cgpa_format_10th','percentage_cgpa_value_10th',
'year_of_passing_10th', 'remarks_10th', 'marksheet_10th_url', 'degree_12th', 'board_12th', 'percentage_cgpa_format_12th', 'percentage_cgpa_value_12th',
'year_of_passing_12th', 'remarks_12th', 'marksheet_12th_url', 'degrees', 'other_remarks', 'is_last_degree_completed','transaction_id',
'interdisciplinary_prog_check' ,'interdisciplinary_prog_name','area_of_research','first_pref','second_pref','third_pref','fourth_pref','specific_research_area','noc_pdf','sop_pdf',
'qualifying_examination_1', 'branch_code_1', 'year_1','valid_upto_1', 'all_india_rank_1', 'score_1' 
,'qualifying_examination_2', 'branch_code_2', 'year_2','valid_upto_2', 'all_india_rank_2', 'score_2'
,'qualifying_examination_3', 'branch_code_3', 'year_3','valid_upto_3', 'all_india_rank_3', 'score_3','exam_result_pdf', 
'signature_url','date_of_declaration', 'place_of_declaration','pi_project_number',
'name_of_working_org_1','designation_1','duration_post_start_1','duration_post_end_1','nature_of_work_1',
'name_of_working_org_1','designation_1','duration_post_start_1','duration_post_end_1','nature_of_work_1',
'total_years_of_service ','publications_pdf'], 
ARRAY['Application ID','Full Name','Father''s Name','Email Address','Profile Image','Date of Birth','Aadhar Card Number','Category','Category Certificate','Belongs to PWD','Marital Status','Nationality','Gender','Communication Address','Permanent Address','Mobile Number','Alternate Mobile Number','Educational Details: 10th',
'Educational Details: 12th','Educational Details: College','Educational Remarks','Last Degree Completion Status','Qualifying Exmaination','Branch Code','GATE Examination Year','GATE Enrollment Number',
'COAP Registration Number','All India Rank','GATE Score','Valid Upto','Self Attested Copies of GATE','Qualifying Exam Remarks','Amount','Transaction ID','Bank','Transaction Slip','Date of Transaction','Signature','Date of Declaration','Place of Declaration','Status','Status Remarks','is_sponsored_applicant','name_of_sponsoring_org','name_of_working_org','address_of_org','designation','post_type','duration_post_start','duration_post_end','years_of_service']);

INSERT INTO TEMPLATES(email_id,name,type,column_list,column_list_compact) VALUES('default@template', 'PART-TIME ', 'APPLICANT LIST', ARRAY[ 'application_id', 'applying_for', 'mode_of_app','full_name','guardian', 'fathers_name', 'profile_image_url', 'date_of_birth', 'aadhar_card_number',
'category', 'is_pwd','pwd_type','blood_group', 'marital_status','spouse_name','spouse_occupation', 'nationality', 'category_certificate_url','pwd_url','gender','advertisement', 'communication_address', 'communication_city','communication_state', 'communication_pincode', 'permanent_address', 'permanent_city', 'permanent_state',
'permanent_pincode', 'mobile_number', 'alternate_mobile_number', 'email_id', 'degree_10th', 'board_10th', 'percentage_cgpa_format_10th','percentage_cgpa_value_10th',
'year_of_passing_10th', 'remarks_10th', 'marksheet_10th_url', 'degree_12th', 'board_12th', 'percentage_cgpa_format_12th', 'percentage_cgpa_value_12th',
'year_of_passing_12th', 'remarks_12th', 'marksheet_12th_url', 'degrees', 'other_remarks', 'is_last_degree_completed','transaction_id',
'interdisciplinary_prog_check' ,'interdisciplinary_prog_name','area_of_research','first_pref','second_pref','third_pref','fourth_pref','specific_research_area','noc_pdf','sop_pdf',
'qualifying_examination_1', 'branch_code_1', 'year_1','valid_upto_1', 'all_india_rank_1', 'score_1' 
,'qualifying_examination_2', 'branch_code_2', 'year_2','valid_upto_2', 'all_india_rank_2', 'score_2'
,'qualifying_examination_3', 'branch_code_3', 'year_3','valid_upto_3', 'all_india_rank_3', 'score_3','exam_result_pdf', 
'signature_url','date_of_declaration', 'place_of_declaration','pi_project_number',
'name_of_working_org_1','designation_1','duration_post_start_1','duration_post_end_1','nature_of_work_1',
'name_of_working_org_1','designation_1','duration_post_start_1','duration_post_end_1','nature_of_work_1',
'total_years_of_service ','publications_pdf'], 
ARRAY['Application ID','Full Name','Father''s Name','Email Address','Profile Image','Date of Birth','Aadhar Card Number','Category','Category Certificate','Belongs to PWD','Marital Status','Nationality','Gender','Communication Address','Permanent Address','Mobile Number','Alternate Mobile Number','Educational Details: 10th',
'Educational Details: 12th','Educational Details: College','Educational Remarks','Last Degree Completion Status','Qualifying Exmaination','Branch Code','GATE Examination Year','GATE Enrollment Number',
'COAP Registration Number','All India Rank','GATE Score','Valid Upto','Self Attested Copies of GATE','Qualifying Exam Remarks','Amount','Transaction ID','Bank','Transaction Slip','Date of Transaction','Signature','Date of Declaration','Place of Declaration','Status','Status Remarks','is_sponsored_applicant','name_of_sponsoring_org','name_of_working_org','address_of_org','designation','post_type','duration_post_start','duration_post_end','years_of_service']);


INSERT INTO TEMPLATES(email_id,name,type,column_list,column_list_compact) VALUES('default@template', 'DIRECT ', 'APPLICANT LIST', ARRAY[ 'application_id', 'applying_for','full_name','guardian', 'fathers_name', 'profile_image_url', 'date_of_birth', 'aadhar_card_number',
'category', 'is_pwd','pwd_type','blood_group', 'marital_status','spouse_name','spouse_occupation', 'nationality', 'category_certificate_url','pwd_url','gender','advertisement', 'communication_address', 'communication_city','communication_state', 'communication_pincode', 'permanent_address', 'permanent_city', 'permanent_state',
'permanent_pincode', 'mobile_number', 'alternate_mobile_number', 'email_id', 'degree_10th', 'board_10th', 'percentage_cgpa_format_10th','percentage_cgpa_value_10th',
'year_of_passing_10th', 'remarks_10th', 'marksheet_10th_url', 'degree_12th', 'board_12th', 'percentage_cgpa_format_12th', 'percentage_cgpa_value_12th',
'year_of_passing_12th', 'remarks_12th', 'marksheet_12th_url', 'degrees', 'other_remarks', 'is_last_degree_completed','transaction_id','bachelor_degree_complete','area_of_research','first_pref','second_pref','third_pref','fourth_pref','specific_research_area','resume_pdf','sop_pdf',
'qualifying_examination_1', 'branch_code_1', 'year_1','valid_upto_1', 'all_india_rank_1', 'score_1' 
,'qualifying_examination_2', 'branch_code_2', 'year_2','valid_upto_2', 'all_india_rank_2', 'score_2'
,'qualifying_examination_3', 'branch_code_3', 'year_3','valid_upto_3', 'all_india_rank_3', 'score_3','exam_result_pdf', 
'signature_url','date_of_declaration', 'place_of_declaration','pi_project_number',
'name_of_working_org_1','designation_1','duration_post_start_1','duration_post_end_1','nature_of_work_1',
'name_of_working_org_1','designation_1','duration_post_start_1','duration_post_end_1','nature_of_work_1',
'total_years_of_service ','publications_pdf'], 
ARRAY['Application ID','Full Name','Father''s Name','Email Address','Profile Image','Date of Birth','Aadhar Card Number','Category','Category Certificate','Belongs to PWD','Marital Status','Nationality','Gender','Communication Address','Permanent Address','Mobile Number','Alternate Mobile Number','Educational Details: 10th',
'Educational Details: 12th','Educational Details: College','Educational Remarks','Last Degree Completion Status','Qualifying Exmaination','Branch Code','GATE Examination Year','GATE Enrollment Number',
'COAP Registration Number','All India Rank','GATE Score','Valid Upto','Self Attested Copies of GATE','Qualifying Exam Remarks','Amount','Transaction ID','Bank','Transaction Slip','Date of Transaction','Signature','Date of Declaration','Place of Declaration','Status','Status Remarks','is_sponsored_applicant','name_of_sponsoring_org','name_of_working_org','address_of_org','designation','post_type','duration_post_start','duration_post_end','years_of_service']);


INSERT INTO TEMPLATES(email_id,name,type,column_list,column_list_compact) VALUES('default@template', 'STAFF MEMBER ', 'APPLICANT LIST', ARRAY[ 'application_id', 'applying_for','full_name','guardian', 'fathers_name', 'profile_image_url', 'date_of_birth', 'aadhar_card_number',
'category', 'is_pwd','pwd_type','blood_group', 'marital_status','spouse_name','spouse_occupation', 'nationality', 'category_certificate_url','pwd_url','gender','advertisement', 'communication_address', 'communication_city','communication_state', 'communication_pincode', 'permanent_address', 'permanent_city', 'permanent_state',
'permanent_pincode', 'mobile_number', 'alternate_mobile_number', 'email_id', 'degree_10th', 'board_10th', 'percentage_cgpa_format_10th','percentage_cgpa_value_10th',
'year_of_passing_10th', 'remarks_10th', 'marksheet_10th_url', 'degree_12th', 'board_12th', 'percentage_cgpa_format_12th', 'percentage_cgpa_value_12th',
'year_of_passing_12th', 'remarks_12th', 'marksheet_12th_url', 'degrees', 'other_remarks', 'is_last_degree_completed','transaction_id','area_of_research','first_pref','second_pref','third_pref','fourth_pref','specific_research_area','noc_pdf','resume_pdf','sop_pdf',
'qualifying_examination_1', 'branch_code_1', 'year_1','valid_upto_1', 'all_india_rank_1', 'score_1' 
,'qualifying_examination_2', 'branch_code_2', 'year_2','valid_upto_2', 'all_india_rank_2', 'score_2'
,'qualifying_examination_3', 'branch_code_3', 'year_3','valid_upto_3', 'all_india_rank_3', 'score_3','exam_result_pdf', 
'signature_url','date_of_declaration', 'place_of_declaration','pi_project_number',
'name_of_working_org_1','designation_1','duration_post_start_1','duration_post_end_1','nature_of_work_1',
'name_of_working_org_1','designation_1','duration_post_start_1','duration_post_end_1','nature_of_work_1',
'total_years_of_service ','publications_pdf'], 
ARRAY['Application ID','Full Name','Father''s Name','Email Address','Profile Image','Date of Birth','Aadhar Card Number','Category','Category Certificate','Belongs to PWD','Marital Status','Nationality','Gender','Communication Address','Permanent Address','Mobile Number','Alternate Mobile Number','Educational Details: 10th',
'Educational Details: 12th','Educational Details: College','Educational Remarks','Last Degree Completion Status','Qualifying Exmaination','Branch Code','GATE Examination Year','GATE Enrollment Number',
'COAP Registration Number','All India Rank','GATE Score','Valid Upto','Self Attested Copies of GATE','Qualifying Exam Remarks','Amount','Transaction ID','Bank','Transaction Slip','Date of Transaction','Signature','Date of Declaration','Place of Declaration','Status','Status Remarks','is_sponsored_applicant','name_of_sponsoring_org','name_of_working_org','address_of_org','designation','post_type','duration_post_start','duration_post_end','years_of_service']);


INSERT INTO TEMPLATES(email_id,name,type,column_list,column_list_compact) VALUES('default@template', 'PROJECT STAFF ', 'APPLICANT LIST', ARRAY[ 'application_id', 'applying_for','full_name','guardian', 'fathers_name', 'profile_image_url', 'date_of_birth', 'aadhar_card_number',
'category', 'is_pwd','pwd_type','blood_group', 'marital_status','spouse_name','spouse_occupation', 'nationality', 'category_certificate_url','pwd_url','gender','advertisement', 'communication_address', 'communication_city','communication_state', 'communication_pincode', 'permanent_address', 'permanent_city', 'permanent_state',
'permanent_pincode', 'mobile_number', 'alternate_mobile_number', 'email_id', 'degree_10th', 'board_10th', 'percentage_cgpa_format_10th','percentage_cgpa_value_10th',
'year_of_passing_10th', 'remarks_10th', 'marksheet_10th_url', 'degree_12th', 'board_12th', 'percentage_cgpa_format_12th', 'percentage_cgpa_value_12th',
'year_of_passing_12th', 'remarks_12th', 'marksheet_12th_url', 'degrees', 'other_remarks', 'is_last_degree_completed','transaction_id',' pi_project_number','area_of_research','first_pref','second_pref','third_pref','fourth_pref','specific_research_area','letter_pi__pdf','sop_pdf',
'qualifying_examination_1', 'branch_code_1', 'year_1','valid_upto_1', 'all_india_rank_1', 'score_1' 
,'qualifying_examination_2', 'branch_code_2', 'year_2','valid_upto_2', 'all_india_rank_2', 'score_2'
,'qualifying_examination_3', 'branch_code_3', 'year_3','valid_upto_3', 'all_india_rank_3', 'score_3','exam_result_pdf', 
'signature_url','date_of_declaration', 'place_of_declaration','pi_project_number',
'name_of_working_org_1','designation_1','duration_post_start_1','duration_post_end_1','nature_of_work_1',
'name_of_working_org_1','designation_1','duration_post_start_1','duration_post_end_1','nature_of_work_1',
'total_years_of_service ','publications_pdf'], 
ARRAY['Application ID','Full Name','Father''s Name','Email Address','Profile Image','Date of Birth','Aadhar Card Number','Category','Category Certificate','Belongs to PWD','Marital Status','Nationality','Gender','Communication Address','Permanent Address','Mobile Number','Alternate Mobile Number','Educational Details: 10th',
'Educational Details: 12th','Educational Details: College','Educational Remarks','Last Degree Completion Status','Qualifying Exmaination','Branch Code','GATE Examination Year','GATE Enrollment Number',
'COAP Registration Number','All India Rank','GATE Score','Valid Upto','Self Attested Copies of GATE','Qualifying Exam Remarks','Amount','Transaction ID','Bank','Transaction Slip','Date of Transaction','Signature','Date of Declaration','Place of Declaration','Status','Status Remarks','is_sponsored_applicant','name_of_sponsoring_org','name_of_working_org','address_of_org','designation','post_type','duration_post_start','duration_post_end','years_of_service']);

-- Always executed because admin will only be allowed to update it
INSERT INTO current_cycle(cycle_id) VALUES(0);

-- Do always
INSERT INTO admins(name, email_id,passwd, admin_type, department) VALUES('Rohit',  '2020csb1118@iitrpr.ac.in','root', 0, '{Academics}');
INSERT INTO admins(name, email_id,passwd ,admin_type, department) VALUES('Sushil', '2020csb1132@iitrpr.ac.in','root', 0, '{Academics}');
INSERT INTO admins(name, email_id,passwd ,admin_type, department) VALUES('Shruti', '2020csb1128@iitrpr.ac.in','root', 0, '{Academics}');
INSERT INTO admins(name, email_id,passwd, admin_type, department) VALUES('Tanish', '2020csb1133@iitrpr.ac.in','root', 0, '{Academics}');

