<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="AngularJSTest.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>
        
    </title>
    <script src="angular.min.js"></script>
    <script src="JavaScript1.js"></script>
</head>
<body ng-app="myModule">

    <form id="form1" runat="server">
    
    <div ng-controller="myController">
        {{ 3+2 }}
        {{childMessage}}
    </div>
    </form>
</bod>
</html>
