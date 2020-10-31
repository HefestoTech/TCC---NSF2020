using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers
{
    [Route("[controller]")]
    [ApiController]

    public class LoginController : ControllerBase
    {
        Utils.GeralConversor conversor = new Utils.GeralConversor();
        Business.CadastroBusiness business = new Business.CadastroBusiness();

        [HttpPost]
        public ActionResult<Models.Response.LoginResponse> CadastrarCliente(Models.Request.CadastrarClienteRequest cadastroCliente)
        {
            try
            {
                Models.TbCliente dadosCliente = conversor.ParaTbCliente(cadastroCliente);
                Models.TbLogin dadosLogin = conversor.ParaTbLogin(cadastroCliente);
                dadosLogin = business.CadastrarCliente(dadosLogin, dadosCliente);
                Models.Response.LoginResponse loginResponse = conversor.ParaLoginResponse(dadosLogin);
                return loginResponse;

            }
            catch (System.Exception ex)
            {
                return BadRequest(new Models.Response.ErroResponse(
                    ex.Message, 400
                ));
            }
        }
    }
}