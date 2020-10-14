using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackEnd.Models
{
    [Table("tb_consulta")]
    public partial class TbConsulta
    {
        [Key]
        [Column("id_consulta")]
        public int IdConsulta { get; set; }
        [Column("id_funcionario")]
        public int IdFuncionario { get; set; }
        [Column("id_servico")]
        public int IdServico { get; set; }
        [Column("id_cliente")]
        public int IdCliente { get; set; }
        [Column("vl_total", TypeName = "decimal(15,2)")]
        public decimal VlTotal { get; set; }
        [Required]
        [Column("tp_forma_pagamento", TypeName = "varchar(40)")]
        public string TpFormaPagamento { get; set; }
        [Column("nr_parcelas")]
        public int? NrParcelas { get; set; }
        [Column("dt_consulta", TypeName = "datetime")]
        public DateTime DtConsulta { get; set; }
        [Column("nr_nota")]
        public int? NrNota { get; set; }
        [Column("ds_comentario_feedback", TypeName = "varchar(100)")]
        public string DsComentarioFeedback { get; set; }
        [Column("dt_inclusao", TypeName = "datetime")]
        public DateTime? DtInclusao { get; set; }
        [Required]
        [Column("ds_situacao", TypeName = "varchar(45)")]
        public string DsSituacao { get; set; }
        [Column("vl_total_por_mes", TypeName = "decimal(15,2)")]
        public decimal? VlTotalPorMes { get; set; }
        [Column("vl_desconto", TypeName = "decimal(15,2)")]
        public decimal? VlDesconto { get; set; }
        [Column("vl_subtotal", TypeName = "decimal(15,2)")]
        public decimal? VlSubtotal { get; set; }

        [ForeignKey(nameof(IdCliente))]
        [InverseProperty(nameof(TbCliente.TbConsulta))]
        public virtual TbCliente IdClienteNavigation { get; set; }
        [ForeignKey(nameof(IdFuncionario))]
        [InverseProperty(nameof(TbFuncionario.TbConsulta))]
        public virtual TbFuncionario IdFuncionarioNavigation { get; set; }
        [ForeignKey(nameof(IdServico))]
        [InverseProperty(nameof(TbServico.TbConsulta))]
        public virtual TbServico IdServicoNavigation { get; set; }
    }
}
